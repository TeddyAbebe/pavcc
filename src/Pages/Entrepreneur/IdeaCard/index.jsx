import React from "react";
import image1 from "../../../assets/image.jpg";
import { ButtonUi } from "../../../Components/Button";
import { useMatch } from "react-router-dom";
const IdeaCard = ({ idea, onClick, onClickInterested }) => {
  const hello = useMatch("/ventura/start-process");
  const hello1 = useMatch("/entrepreneur/*");
  return (
    <div
      className={` shadow-lg rounded-t-lg hover:shadow-xl transition-shadow duration-300 border-t-[3px] ${
        idea?.status === "Approved"
          ? "border-[#15803D]"
          : idea?.status === "Pending"
          ? "border-yellow-500"
          : "border-red-700"
      } `}
    >
      <div className="w-full h-[25vh] overflow-hidden rounded-t-lg rounded-br-lg">
        <img
          src={idea?.coverPageImage}
          alt="image1"
          className="w-full h-full object-cover "
        />
      </div>
      <div className="px-4 py-2">
        <p className="text-gray-700 font-bold ">{idea?.title}</p>
        <h1 className="text-gray-700 font-bold text-xs">{idea?.discription}</h1>
        <h1 className="text-gray-700 font-bold text-xs">
          {idea?.businessSector}
        </h1>
        <hr className="my-4 border-[.5px] border-dotted " />
        <div className="flex items-center justify-between mb-2">
          <div className="flex flex-col">
            <span className=" font-bold">{idea?.howManyUsersView}</span>
            <span className="text-xs text-gray-400">View</span>
          </div>
          <div className="flex flex-col">
            <span className=" font-bold">{idea?.updatedBy?.length}</span>
            <span className="text-xs text-gray-400">Investor</span>
          </div>
          <div className="flex flex-col">
            <span className=" font-bold">$ {idea?.investmentNeededUSD}</span>
            <span className="text-xs text-gray-400">Min. Investment</span>
          </div>
        </div>

        <div className="flex gap-2 w-full items-center my-2">
          {!hello ||
            (!hello1 && (
              <ButtonUi
                label="Interested"
                type="button"
                className="bg-[#dba329] hover:bg-[#d4aa4d] w-full font-semibold text-white py-1 text-sm"
                onClick={() => onClickInterested(idea._id)}
              />
            ))}
          <ButtonUi
            label="Detail"
            type="button"
            className="bg-[#1F2937] hover:bg-[#415674] w-full font-semibold text-white py-1 text-sm"
            onClick={() => onClick(idea._id)}
          />
        </div>
      </div>
    </div>
  );
};

export default IdeaCard;
