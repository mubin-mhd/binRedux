import React, { useState, useEffect } from "react";
import Text from "../../lib/atoms/Text";
import InputField from "../../lib/atoms/InputField";
import Button from "../../lib/atoms/Button";
import CardTodo from "../../lib/organisms/CardTodo";
import { useSelector, useDispatch } from "react-redux";
import {
  getListTodo,
  insertTodo,
  deleteTodo,
  updateImportant,
  updateComplete,
  searchTodo,
} from "../../features/todoSlice";
import { Loading } from "../../component/Loading";
import ModalAddTodo from "../../lib/organisms/ModalAddTodo";
import { modalActions } from "../../features/modalSlice";
import supabase from "../../config/supabase";
import swal from "sweetalert";
import { LoadingSmall } from "../../component/LoadingSmall";

const TodoApp = () => {
  const dispatch = useDispatch();
  const { todosData, isLoading, isSuccess, isLoad } = useSelector(
    (data) => data.todo
  );
  const [textSearch, setTextSearch] = useState("");
  const { openModalAddTodo } = useSelector((item) => item.modal);

  const handleOpenModal = () => {
    dispatch(modalActions.openModalAddTodo());
  };

  const handleCloseModal = () => {
    dispatch(modalActions.closeModalAddTodo());
  };

  const handleAddSubmit = (value) => {
    dispatch(insertTodo(value));
    if (!isLoad) {
      dispatch(modalActions.closeModalAddTodo());
    }
  };

  const handleDeleteTodo = (id) => {
    dispatch(deleteTodo(id));
  };

  const handleChangeimportant = (isImportant, id) => {
    const payload = {
      isImportant,
      id,
    };
    dispatch(updateImportant(payload));
  };

  const handleChangeComplete = (isComplete, id) => {
    const payload = {
      isComplete,
      id,
    };
    dispatch(updateComplete(payload));
  };

  const handleChangeSearch = (e) => {
    setTextSearch(e.target.value);
  };

  const handleSearch = (e) => {
    if (e.which == 13) {
      if (textSearch) {
        dispatch(searchTodo(textSearch));
      } else {
        dispatch(getListTodo());
      }
    }
  };

  useEffect(() => {
    dispatch(getListTodo());

    const todolistEvent = supabase
      .channel("custom-all-channel")
      .on(
        "postgres_changes",
        { event: "*", schema: "public", table: "todolist" },
        (payload) => {
          console.log("Change received!", payload);
          if (payload.eventType === "DELETE") {
            swal("Good job!", "Success Delete Todo!", "success").then(() => {
              dispatch(getListTodo());
            });
          }
          if (payload.eventType === "INSERT") {
            swal("Good job!", "Success Add Todo!", "success").then(() => {
              dispatch(getListTodo());
            });
          }
          if (payload.eventType === "UPDATE") {
            swal(`id ${payload.old.id} updated!`).then(() => {
              dispatch(getListTodo());
            });
          }
        }
      )
      .subscribe();
  }, [dispatch]);

  const date = new Date();

  return (
    <div className="w-[900px]">
      <Text label="Todo App" size="large" addClass="mb-4" />
      <div className="flex justify-between items-center">
        <InputField
          placeholder="Search..."
          addClass="w-[48px]"
          onChange={handleChangeSearch}
          value={textSearch}
          onEnter={handleSearch}
        />
        <Text
          size="medium"
          label={`${date.getDate().toString()} / ${date
            .getMonth()
            .toString()} / ${date.getFullYear().toString()} `}
        />
        <Button label="Add New Task" onClick={handleOpenModal} />
      </div>
      <Text
        size="large"
        label={`All Tasks (${todosData ? todosData.length : 0})`}
        addClass="my-5"
      />
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <div className="grid grid-cols-3 gap-10">
            {todosData?.map((item, index) => {
              if (item.important) {
                return (
                  <CardTodo
                    data={item}
                    key={index}
                    onDelete={handleDeleteTodo}
                    isLoad={isLoad}
                    onChangeimportant={handleChangeimportant}
                    onChangeComplete={handleChangeComplete}
                    bgCard="bg-slate-500"
                  />
                );
              }
            })}
          </div>
          <div className="grid grid-cols-3 gap-10 mt-10">
            {todosData?.map((item, index) => {
              if (!item.important) {
                return (
                  <CardTodo
                    data={item}
                    key={index}
                    onDelete={handleDeleteTodo}
                    isLoad={isLoad}
                    onChangeimportant={handleChangeimportant}
                    onChangeComplete={handleChangeComplete}
                    bgCard="bg-gray-400"
                  />
                );
              }
            })}
          </div>
        </>
      )}
      <ModalAddTodo
        openModal={openModalAddTodo}
        onLeave={handleCloseModal}
        onSubmit={handleAddSubmit}
        isLoad={isLoad}
      />
    </div>
  );
};

export default TodoApp;
