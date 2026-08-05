import axios from "axios";

const API_URL = "https://6a7277de4d741b02b1f799e2.mockapi.io/api/v1/products";

const CLOUDINARY_CLOUD_NAME = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
const CLOUDINARY_UPLOAD_PRESET = import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET;
const CLOUDINARY_URL = `https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/image/upload`;

export const productService = {
  uploadImage: async (file) => {
    if (!file) {
      throw new Error("No image file selected for upload.");
    }

    if (!CLOUDINARY_CLOUD_NAME || !CLOUDINARY_UPLOAD_PRESET) {
      throw new Error(
        "Cloudinary configuration is missing. Add VITE_CLOUDINARY_CLOUD_NAME and VITE_CLOUDINARY_UPLOAD_PRESET to your .env file."
      );
    }

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", CLOUDINARY_UPLOAD_PRESET);

    try {
      const response = await axios.post(CLOUDINARY_URL, formData);
      return response.data.secure_url;
    } catch (error) {
      const errorMessage =
        error?.response?.data?.error?.message ||
        error?.response?.data?.error ||
        error?.response?.data ||
        error?.message ||
        "Cloudinary upload failed.";
      throw new Error(errorMessage);
    }
  },

  // Get all products 
  getProducts: async () => {
    const response = await axios.get(API_URL);
    return response.data;
  },

  // Get product by ID
  getProductById: async (id) => {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
  },

  // Add new product
  addProduct: async (productData) => {
    const payload = {
      title: productData.title,
      category: productData.category,
      price: productData.price,
      oldprice: productData.oldprice,
      isTrending: productData.isTrending,
      date: productData.date || new Date().toISOString().split("T")[0],
    };

    if (productData.image) {
      payload.image = productData.image;
    }

    const response = await axios.post(API_URL, payload);
    return response.data;
  },

  // Update product
  updateProduct: async (id, productData) => {
    const payload = {
      title: productData.title,
      category: productData.category,
      price: productData.price,
      oldprice: productData.oldprice,
      isTrending: productData.isTrending,
      date: productData.date ?? new Date().toISOString().split("T")[0],
    };

    if (productData.image) {
      payload.image = productData.image;
    }

    const response = await axios.put(`${API_URL}/${id}`, payload);
    return response.data;
  },

  // Delete product
  deleteProduct: async (id) => {
    const response = await axios.delete(`${API_URL}/${id}`);
    return response.data;
  },
};
