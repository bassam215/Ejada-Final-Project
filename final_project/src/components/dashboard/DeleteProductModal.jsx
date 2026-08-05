import { productService } from "../../services/productService";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export default function DeleteProductModal({ isOpen, onClose, onSuccess, product }) {

  const handleDelete = async () => {
    if (!product) return;
    try {
      await productService.deleteProduct(product.id);
      onSuccess();
      onClose();
    } catch (error) {
      console.error("Error deleting product", error);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-[440px] rounded-[24px] bg-white p-6">
        <DialogHeader>
          <DialogTitle>Delete Product</DialogTitle>
        </DialogHeader>

        <div className="py-2">
          <p className="text-sm text-gray-600">
            Are you sure you want to delete{" "}
            <span className="font-semibold text-gray-900">
              {product?.title}
            </span>
          </p>
        </div>

        <div className="flex items-center justify-end gap-3 pt-4">
          <Button type="button" variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button type="button" onClick={handleDelete} className="bg-red-600 hover:bg-red-700 text-white">
            Delete
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
  