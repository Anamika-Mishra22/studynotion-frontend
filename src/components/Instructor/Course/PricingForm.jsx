import { useDispatch, useSelector } from "react-redux";
import { updatePricing } from "../../../redux/course/courseSlice";

const PricingForm = () => {
  const dispatch = useDispatch();
  const pricing = useSelector((state) => state.courses.pricing);

  return (
    <div className="space-y-4">

      <div>
        <label className="block mb-1">Course Price (₹)</label>
        <input
        name="Course_Price"
          type="number"
          value={pricing.price}
          onChange={(e) =>
            dispatch(updatePricing({ price: e.target.value }))
          }
          className="w-full p-2 rounded bg-gray-800"
        />
      </div>

      <div>
        <label className="block mb-1">Discount (%)</label>
        <input
          type="number"
          value={pricing.discount}
          onChange={(e) =>
            dispatch(updatePricing({ discount: e.target.value }))
          }
          className="w-full p-2 rounded bg-gray-800"
        />
      </div>

      <div className="bg-gray-900 p-4 rounded">
        <p className="text-sm text-gray-400">Final Price:</p>
        <p className="text-xl font-bold text-teal-400">
          ₹
          {pricing.price -
            (pricing.price * pricing.discount) / 100 || 0}
        </p>
      </div>

    </div>
  );
};

export default PricingForm;
