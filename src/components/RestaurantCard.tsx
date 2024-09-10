import React from "react";
import Rating from "./Rating";
import { FaCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

type RestaurantCardProps = {
  id: string;
  name: string;
  rating: number;
  cuisine: string;
  price_level: string;
  is_closed: boolean;
  image_url: string;
};

export default function RestaurantCard(props: RestaurantCardProps) {
  if (!props.name) {
    return null;
  }
  return (
    <div className="">
      <div className="w-full h-[260px] bg-neutral-300">
        {props.image_url && (
          <img
            src={props.image_url}
            alt=""
            className="object-cover w-full h-full"
          />
        )}
      </div>
      <div className="py-4">
        <h4 className="font-medium text-limit">{props.name ?? "-"}</h4>
        <div className="mt-1">
          <Rating value={props.rating} />
        </div>
        <div className="flex items-center justify-between mt-2">
          <div>
            <p className="text-xs text-neutral-500">
              {props.cuisine} ●
              {props.price_level === "1"
                ? "$"
                : props.price_level === "2"
                ? "$$"
                : props.price_level === "3"
                ? "$$$"
                : props.price_level === "4"
                ? "$$$$"
                : "N/A"}
            </p>
          </div>
          <div>
            <IsClosed isClosed={props.is_closed} />
          </div>
        </div>
        <div>
          <Link to={`/detail/${props.id}`} className="">
            <button className="mt-4 btn btn-primary">
              <p className="text-sm font-light tracking-wider">LEARN MORE</p>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export const IsClosed: React.FC<{ isClosed: boolean }> = ({ isClosed }) => {
  return (
    <div className="flex items-center gap-1">
      {isClosed ? (
        <FaCircle className="text-red-500" />
      ) : (
        <FaCircle className="text-green-500" />
      )}
      <p className="text-xs">{isClosed ? "CLOSED" : "OPEN NOW"}</p>
    </div>
  );
};
