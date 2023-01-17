import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getListProduct,
  productSelectors,
  deleteProduct,
  addProduct,
} from "../../features/productSlice";
import rupiah from "../../helper/formatRp";
import ModalAddProduct from "../../component/Modal/AddProduct";
import Text from "../../lib/atoms/Text";
import { Loading } from "../../component/Loading";

const ListProduct = () => {
  const dispatch = useDispatch();
  const produks = useSelector(productSelectors.selectAll);
  const [openModalAdd, setOpenModalAdd] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [counter, setCounter] = useState(0);

  const loadingHandler = (loadValue) => {
    setIsLoading(loadValue);
  };

  const handleOpenModalAdd = () => {
    setOpenModalAdd(true);
  };

  const handleCloseModalAdd = () => {
    setOpenModalAdd(false);
  };

  const handleDeleteProduct = (id) => {
    const hitDelete = {
      id,
      loading: loadingHandler,
      setCounter,
    };
    dispatch(deleteProduct(hitDelete));
  };

  const handleSubmitProduct = (event) => {
    setOpenModalAdd(false);
    const hitAdd = {
      data: event,
      loading: loadingHandler,
      setCounter,
    };
    dispatch(addProduct(hitAdd));
    setCounter((prev) => prev + 1);
  };

  useEffect(() => {
    dispatch(getListProduct(loadingHandler));
  }, [dispatch, counter]);

  return (
    <div>
      <Text
        label="Tabel Product"
        size="large"
        addClass="font-semibold dark:text-white"
      />
      {isLoading ? (
        <Loading />
      ) : (
        <div className="flex items-start mt-4 w-[1000px]">
          <div class=" relative shadow-md ">
            <table class="w-[970px] text-sm text-left text-gray-500 dark:text-gray-400 bg-gray-50">
              <thead class="text-xs text-gray-700 uppercase dark:text-gray-400">
                <tr>
                  <th scope="col" class="py-3 px-6 text-gray-700 font-Inter">
                    No
                  </th>
                  <th scope="col" class="py-3 px-6 text-gray-700 font-Inter">
                    Product Name
                  </th>
                  <th scope="col" class="py-3 px-6 text-gray-700 font-Inter">
                    Description
                  </th>
                  <th scope="col" class="py-3 px-6 text-gray-700 font-Inter">
                    Price
                  </th>
                  <th scope="col" class="py-3 px-6 text-gray-700 font-Inter">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {produks.map((item, index) => (
                  <>
                    <tr class="border-b border-gray-200 dark:border-gray-700">
                      <td class="py-4 px-6 text-center text-gray-500 font-Inter">
                        {index + 1}
                      </td>
                      <td
                        scope="row"
                        class="py-4 px-6 font-medium text-gray-500 font-Inter whitespace-nowrap "
                      >
                        {item.name}
                      </td>
                      <td class="py-4 px-6 max-w-lg text-gray-500 font-Inter">
                        {item.description}
                      </td>
                      <td class="py-4 px-6 text-gray-500 font-Inter">
                        {rupiah(item.price)}
                      </td>
                      <td class="py-4 px-6  max-w-lg ">
                        <button
                          onClick={() => handleDeleteProduct(item.id)}
                          type="button"
                          class="focus:outline-none bg-red1 text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-1.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                        >
                          <i class="bi bi-trash text-gray-700"></i>
                        </button>
                        <button
                          type="button"
                          class="focus:outline-none text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-1.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-900"
                        >
                          <i class="bi bi-pencil-square text-white"></i>
                        </button>
                      </td>
                    </tr>
                  </>
                ))}
              </tbody>
            </table>
          </div>
          <button
            onClick={handleOpenModalAdd}
            type="button"
            class="h-min w-min ml-2 focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
          >
            +
          </button>
        </div>
      )}

      <ModalAddProduct
        openModal={openModalAdd}
        onLeave={handleCloseModalAdd}
        onSubmit={(event) => handleSubmitProduct(event)}
      />
    </div>
  );
};

export default ListProduct;
