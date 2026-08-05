import { useState, useEffect } from "react";
import { productService } from "../../services/productService";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export default function UpdateProductModal({ isOpen, onClose, onSuccess, product }) {
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("Men");
  const [price, setPrice] = useState("");
  const [oldPrice, setOldPrice] = useState("");
  const [isTrending, setIsTrending] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);

  useEffect(() => {
    if (product) {
      setTitle(product.title || product.name || "");
      setCategory(product.category || "Men");
      setPrice(product.price ?? "");
      setOldPrice(product.oldprice ?? "");
      setIsTrending(Boolean(product.isTrending));
      setSelectedFile(null);
    }
  }, [product, isOpen]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!product) return;

    const priceValue = Number(price);
    if (!price || isNaN(priceValue) || priceValue <= 0) {
      alert("Please enter a valid price greater than zero.");
      return;
    }

    setLoading(true);
    try {
      const payload = {
        title,
        category,
        price,
        oldprice: oldPrice,
        isTrending,
        date: product.date,
      };

      if (selectedFile) {
        payload.image = await productService.uploadImage(selectedFile);
      } else {
        payload.image = product.image;
      }

      await productService.updateProduct(product.id, payload);

      onSuccess();
      onClose();
    } catch (error) {
      console.error("Error updating product:", error);
      alert(error?.message || "Failed to update product. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-[440px] rounded-[24px] bg-white p-6">
        <DialogHeader>
          <DialogTitle>Edit Product</DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label>Title</Label>
            <Input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="BLACK WOOL BLEND JACKET"
            />
          </div>

          <div>
            <Label>Category</Label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full h-10 border rounded-xl px-3"
            >
              <option value="Men">Men</option>
              <option value="Woman">Woman</option>
              <option value="Boy">Boy</option>
              <option value="Girl">Girl</option>
            </select>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <Label>Price</Label>
              <Input
                type="number"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>

            <div>
              <Label>Old Price</Label>
              <Input
                type="number"
                value={oldPrice}
                onChange={(e) => setOldPrice(e.target.value)}
              />
            </div>
          </div>

          <div className="flex items-center gap-2 pt-1">
            <input
              type="checkbox"
              checked={isTrending}
              onChange={(e) => setIsTrending(e.target.checked)}
            />
            <Label>isTrending</Label>
          </div>

          <div>
            <Label>Image</Label>
            <Input
              type="file"
              accept="image/*"
              onChange={(e) => setSelectedFile(e.target.files?.[0] || null)}
            />
          </div>

          <div className="flex justify-end gap-3 pt-4">
            <Button type="button" variant="outline" onClick={onClose} disabled={loading}>
              Cancel
            </Button>
            <Button type="submit" disabled={loading}>
              {loading ? "Saving..." : "Save"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
