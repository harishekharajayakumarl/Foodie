import { CDN_URL } from "../../utils/constants";
import { useDispatch } from "react-redux";
import { useCallback } from "react";
import { addItem } from "../../utils/cartSlice";

const ItemList = ({ items }) => {
    const dispatch = useDispatch();
    const handleAddItem = useCallback(
        (item) => {
            dispatch(addItem(item));
        },
        [dispatch]
    );

    return (
        <div>
            {items && items.map((item) => (
                item && item.card && item.card.info ? (
                    <div
                        key={item.card.info.id}
                        className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between"
                    >
                        <div className="w-9/12">
                            <div className="py-2 font-bold">
                                <span>{item.card.info.name}</span>
                            </div>
                            <div className="py-2 font-semibold">
                                <span>
                                    ₹{item.card.info.price
                                        ? item.card.info.price / 100
                                        : item.card.info.defaultPrice / 100}
                                </span>
                            </div>
                            <p className="text-xs">{item.card.info.description}</p>
                        </div>
                        <div className="w-3/12 p-4 flex flex-col justify-end items-center">
                            <div className="absolute">
                                <button
                                    className="p-2 mx-25 rounded-lg bg-black text-white shadow-lg"
                                    onClick={() => handleAddItem(item)}
                                >
                                    Add +
                                </button>
                            </div>
                            {item.card.info.imageId && (
                                <img
                                    src={CDN_URL + item.card.info.imageId}
                                    alt={item.card.info.name}
                                />
                            )}
                        </div>
                    </div>
                ) : null
            ))}
        </div>
    );
};

export default ItemList;