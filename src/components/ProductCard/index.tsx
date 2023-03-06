import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { api } from "../../services/api";
import "./styles.css";
import Modal from "react-modal";
import { Form, Product } from "../Form";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "#2b323bbc",
    color: "#fff",
    borderRadius: 12,
  },
};
export interface IRegisteredProduct {
  id: number;
  title: string;
  value: number;
  description: string;
  image: string;
  callProducts: () => void;
  fullProduct: Product;
}

export function ProductCard({
  id,
  title,
  value,
  description,
  image,
  callProducts,
  fullProduct
}: IRegisteredProduct) {
  const [updateModalIsOpen, setIsUpdateModalOpen] = useState(false);
  const [deleteModalIsOpen, setIsDeleteOpen] = useState(false);

  function openUpdateModal() {
    setIsUpdateModalOpen(true);
  }

  function openDeleteModal() {
    setIsDeleteOpen(true);
  }

  function closeUpdateModal() {
    setIsUpdateModalOpen(false);
  }

  function closeDeleteModal() {
    setIsDeleteOpen(false);
  }

  const handleDeleteProduct = async (productId: number) => {
    try {
      await api.delete(`Product/${productId.toString()}`);

      closeDeleteModal();

      callProducts();

      const notify = () =>
        toast.success("Produto deletado com sucesso! 😎", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      notify();
    } catch (error) {
      const notify = () =>
        toast.error("Erro ao deletar produto, tente novamente 😥", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      notify();
    }
  };

  return (
    <>
      <div className="product-card">
        <div className="product-image">
          <img
            src={`https://source.unsplash.com/800x600/?${image}`}
            alt="imagem do card"
          />
        </div>
        <div className="product-general">
          <div className="product-info">
            <h3 className="product-title">{title}</h3>
            <span className="product-value">R${value}</span>
            <p className="product-description">{description}</p>
          </div>
          <div className="product-buttons">
            <button id="product-btn-update" onClick={openUpdateModal}>
              atualizar
            </button>
            <button onClick={openDeleteModal} id="product-btn-delete">
              deletar
            </button>
          </div>
        </div>
      </div>

      <Modal
        isOpen={updateModalIsOpen}
        onRequestClose={closeUpdateModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="modal-delete">
          <Form productFilled={fullProduct} onSucess={() => {
             callProducts();
             closeUpdateModal();
            }}
          />
        </div>
      </Modal>

      <Modal
        isOpen={deleteModalIsOpen}
        onRequestClose={closeDeleteModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="modal-delete">
          <h2 className="modal-title">
            Você tem certeza que deseja deletar o produto?
          </h2>
          <button
            className="modal-btn modal-btn-cancel"
            onClick={closeDeleteModal}
          >
            cancelar
          </button>
          <button
            className="modal-btn modal-btn-confirm"
            onClick={() => handleDeleteProduct(id)}
          >
            confirmar
          </button>
        </div>
      </Modal>
    </>
  );
}
