import React, { useEffect, useState } from "react";
import Text from "../../atoms/Text";
import Button from "../../atoms/Button";
import InputField from "../../atoms/InputField";
import ButtonIcon from "../../atoms/ButtonIcon";
import { HiOutlineX } from "react-icons/hi";
import Select from "../../atoms/Select";
import { detailEdit } from "../../../features/todoSlice";
import { useDispatch, useSelector } from "react-redux";

const defaultDataHit = {
  title: "",
  description: "",
  important: "",
  completed: "",
  dir: "main",
};

const ModalActionEdit = ({
  openModal = false,
  onLeave,
  onSubmit,
  isLoad,
  dataEdit,
}) => {
  const dispatch = useDispatch();
  const { detailData } = useSelector((data) => data.todo);
  const [dataHit, setDataHit] = useState(defaultDataHit);
  const handleChange = (event, key) => {
    setDataHit((prev) => {
      return {
        ...prev,
        [key]: event.target.value,
      };
    });
  };

  function convertImportant(val) {
    if (val) {
      return "important";
    } else {
      return "notImportant";
    }
  }

  const disableButton = !dataHit.title || !dataHit.description;

  const optionsStatus = [
    { name: "Uncomplete", value: "uncomplete" },
    { name: "Complete", value: "complete" },
  ];
  const options = [
    { name: "Not Important", value: "notImportant" },
    { name: "Important", value: "important" },
  ];
  const optionsDir = [{ name: "Main", value: "main" }];

  useEffect(() => {
    dispatch(detailEdit(dataEdit?.id));
  }, [dispatch]);

  return (
    <>
      {openModal ? (
        <>
          <div
            data-aos="zoom-in"
            data-aos-delay="20"
            data-aos-duration="200"
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full  bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-center justify-between p-3 border-b border-solid border-slate-200 rounded-t">
                  <Text label="Edit Todo" size="large" />
                  <ButtonIcon
                    onClick={onLeave}
                    icon={<HiOutlineX className="text-lg" />}
                  />
                </div>
                {/*body*/}
                <div className="modal-body relative p-4">
                  <form className="w-full">
                    <div class="mb-2">
                      <Text label="Title" size="medium" />
                      <InputField
                        type="text"
                        id="name"
                        required
                        value={
                          dataHit.title == "" ? dataEdit.title : dataHit.title
                        }
                        onChange={(e) => handleChange(e, "title")}
                      />
                    </div>
                    <div class="mb-2">
                      <Text label="Description" size="medium" />
                      <InputField
                        type="text"
                        id="deskripsi"
                        required
                        value={
                          dataHit.description === ""
                            ? dataEdit.description
                            : dataHit.description
                        }
                        onChange={(e) => handleChange(e, "description")}
                      />
                    </div>
                    <div class="mb-2">
                      <div>
                        <Text label="Status" size="medium" />
                        <Select
                          options={options}
                          defaultValue={convertImportant(dataEdit.important)}
                          value={
                            dataHit.important === ""
                              ? convertImportant(dataEdit.important)
                              : dataHit.important
                          }
                          onChange={(e) => handleChange(e, "important")}
                        />
                      </div>
                    </div>
                    <div class="mb-2">
                      <div>
                        <Text label="Status" size="medium" />
                        <Select
                          value={
                            dataHit.completed === ""
                              ? dataEdit.completed
                              : dataHit.completed
                          }
                          options={optionsStatus}
                          defaultValue={dataEdit.completed}
                          onChange={(e) => handleChange(e, "completed")}
                        />
                      </div>
                    </div>
                    <div class="mb-2">
                      <div>
                        <Text label="Dir" size="medium" />
                        <Select
                          options={optionsDir}
                          value={dataHit.dir}
                          onChange={(e) => handleChange(e, "dir")}
                        />
                      </div>
                    </div>
                  </form>
                </div>

                {/*footer*/}
                <div className="flex items-center justify-between p-3 border-t border-solid border-slate-200 rounded-b">
                  <Button
                    bgColor="bg-pink-600"
                    color="text-white"
                    onClick={onLeave}
                    label="Close"
                    addClass="hover:bg-pink-500"
                  />
                  <Button
                    disabled={disableButton}
                    label={isLoad ? "Adding..." : "Edit"}
                    onClick={() => {
                      onSubmit(dataHit);
                      setDataHit({
                        ...defaultDataHit,
                      });
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
};

export default ModalActionEdit;
