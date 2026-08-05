import { useState, useEffect } from "react";
import { productService } from "../services/productService";
import AddProductModal from "../components/dashboard/AddProductModal";
import UpdateProductModal from "../components/dashboard/UpdateProductModal";
import DeleteProductModal from "../components/dashboard/DeleteProductModal";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";

export default function Dashboard() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isAddOpen, setIsAddOpen] = useState(false);
  const [isUpdateOpen, setIsUpdateOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const loadProducts = async () => {
    setLoading(true);
    try {
      const data = await productService.getProducts();
      setProducts(data);
    } catch (error) {
      console.error("Failed to load products from API", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadProducts();
  }, []);

  const handleOpenAdd = () => {
    setIsAddOpen(true);
  };

  const handleOpenUpdate = (product) => {
    setSelectedProduct(product);
    setIsUpdateOpen(true);
  };

  const handleOpenDelete = (product) => {
    setSelectedProduct(product);
    setIsDeleteOpen(true);
  };

  const handleCloseUpdate = () => {
    setIsUpdateOpen(false);
    setSelectedProduct(null);
  };

  const handleCloseDelete = () => {
    setIsDeleteOpen(false);
    setSelectedProduct(null);
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA] px-4 py-8 md:px-8">
      <div className="mx-auto max-w-6xl">
        {/* Top Header */}
        <div className="mb-6 flex items-center justify-between">
          <h1 className="text-2xl font-bold tracking-tight text-black">
            manage products
          </h1>
          <Button
            onClick={handleOpenAdd}
            className="h-9 rounded-lg bg-black px-4 text-xs font-semibold text-white hover:bg-gray-800"
          >
            Add products
          </Button>
        </div>

        {/* Table Container */}
        <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-xs">
          <Table>
            <TableHeader className="bg-gray-50/50">
              <TableRow className="border-b border-gray-100 hover:bg-transparent">
                <TableHead className="py-3 text-xs font-medium text-gray-700">
                  image
                </TableHead>
                <TableHead className="py-3 text-xs font-medium text-gray-700">
                  title
                </TableHead>
                <TableHead className="py-3 text-xs font-medium text-gray-700">
                  category
                </TableHead>
                <TableHead className="py-3 text-xs font-medium text-gray-700">
                  price
                </TableHead>
                <TableHead className="py-3 text-xs font-medium text-gray-700">
                  oldprice
                </TableHead>
                <TableHead className="py-3 text-xs font-medium text-gray-700">
                  isTrending
                </TableHead>
                <TableHead className="py-3 text-xs font-medium text-gray-700">
                  date
                </TableHead>
                <TableHead className="py-3 text-right text-xs font-medium text-gray-700 pr-4">
                  actions
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {loading && (
                <TableRow>
                  <TableCell colSpan={8} className="py-12 text-center text-sm text-gray-500">
                    Loading products...
                  </TableCell>
                </TableRow>
              )}

              {!loading && products.length === 0 && (
                <TableRow>
                  <TableCell colSpan={8} className="py-8 text-center text-sm text-gray-500">
                    No products found.
                  </TableCell>
                </TableRow>
              )}

              {!loading && products.length > 0 &&
                products.map((product) => (
                  <TableRow
                    key={product.id}
                    className="border-b border-gray-100 transition-colors hover:bg-gray-50/40"
                  >
                    {/* image */}
                    <TableCell className="py-3">
                      <div className="h-11 w-11 overflow-hidden rounded-lg border border-gray-100 bg-gray-50">
                        <img
                          src={product.image}
                          alt={product.title}
                          className="h-full w-full object-cover"
                        />
                      </div>
                    </TableCell>

                    {/* title */}
                    <TableCell className="py-3 text-xs font-medium text-gray-900">
                      {product.title }
                    </TableCell>

                    {/* category */}
                    <TableCell className="py-3 text-xs text-gray-700">
                      {product.category }
                    </TableCell>

                    {/* price */}
                    <TableCell className="py-3 text-xs text-gray-900">
                      {product.price}
                    </TableCell>

                    {/* oldprice */}
                    <TableCell className="py-3 text-xs text-gray-500 line-through">
                      {product.oldprice }
                    </TableCell>

                    {/* isTrending */}
                    <TableCell className="py-3 text-xs text-gray-700">
                      <span
                        className={`inline-block px-2 py-0.5 rounded-full text-[10px] font-medium ${
                          product.isTrending
                            ? "bg-green-50 text-green-600"
                            : "bg-gray-100 text-gray-500"
                        }`}
                      >
                        {product.isTrending ? "True" : "False"}
                      </span>
                    </TableCell>

                    {/* date */}
                    <TableCell className="py-3 text-xs text-gray-600">
                      {product.date }
                    </TableCell>

                    {/* actions */}
                    <TableCell className="py-3 text-right pr-4">
                      <div className="flex items-center justify-end gap-1.5">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleOpenUpdate(product)}
                          className="h-7 rounded-md border-gray-200 bg-white px-2.5 text-xs font-normal text-gray-800 hover:bg-gray-50 shadow-none"
                        >
                          Edit
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleOpenDelete(product)}
                          className="h-7 rounded-md border-0 bg-red-50/80 px-2.5 text-xs font-normal text-red-500 hover:bg-red-100 hover:text-red-600 shadow-none"
                        >
                          Delete
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))
              }
            </TableBody>
          </Table>
        </div>
      </div>

      {/* Add Product Modal Component */}
      <AddProductModal
        isOpen={isAddOpen}
        onClose={() => setIsAddOpen(false)}
        onSuccess={loadProducts}
      />

      {/* Update Product Modal Component */}
      <UpdateProductModal
        isOpen={isUpdateOpen}
        onClose={handleCloseUpdate}
        onSuccess={loadProducts}
        product={selectedProduct}
      />

      {/* Delete Product Modal Component */}
      <DeleteProductModal
        isOpen={isDeleteOpen}
        onClose={handleCloseDelete}
        onSuccess={loadProducts}
        product={selectedProduct}
      />
    </div>
  );
}
