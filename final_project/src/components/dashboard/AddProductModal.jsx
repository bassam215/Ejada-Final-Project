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

export default function AddProductModal({
  isOpen,
  onClose,
  onSuccess,
}) {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("Men");
  const [price, setPrice] = useState("");
  const [oldPrice, setOldPrice] = useState("");
  const [isTrending, setIsTrending] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setTitle("");
      setCategory("Men");
      setPrice("");
      setOldPrice("");
      setIsTrending(false);
      setSelectedFile(null);
    }
  }, [isOpen]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title.trim()) {
      alert("Please enter a title.");
      return;
    }

    const priceValue = Number(price);
    if (!price || isNaN(priceValue) || priceValue <= 0) {
      alert("Please enter a valid price greater than zero.");
      return;
    }

    setLoading(true);
    try {
      let payload = {
        title,
        category,
        price,
        oldprice: oldPrice,
        isTrending,
      };

      if (selectedFile) {
        payload.image = await productService.uploadImage(selectedFile);
      }

      await productService.addProduct(payload);

      onSuccess();
      onClose();
    } catch (error) {
      console.error(error);
      alert(error?.message || "Failed to add product");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-[440px] rounded-[24px] bg-white p-6">
        <DialogHeader>
          <DialogTitle>Add Product</DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label>Title</Label>
            <Input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="BLACK SHOE"
              required
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
              onChange={(e) =>
                setSelectedFile(e.target.files?.[0] || null)
              }
            />
          </div>

          <div className="flex justify-end gap-3 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              disabled={loading}
            >
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