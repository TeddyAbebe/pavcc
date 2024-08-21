import React, { useEffect, useState } from "react";
import { FilterBySelect } from "../../../Components/FilterBySelect";
import { useNavigate } from "react-router-dom";
import { Pagination } from "../../../Components/Pagination";
import { FaFileAlt } from "react-icons/fa";
import axios from "axios";
import { back_base_url } from "../../../Lib/config";
import IdeaCard from "../../Entrepreneur/IdeaCard";
import Modal from "../../../Components/Model";

export const AllIdeas = () => {
  const filters = [
    {
      label: "Industry",
      name: "industry",
      options: [
        { label: "Technology", value: "technology" },
        { label: "Healthcare", value: "healthcare" },
        { label: "Education", value: "education" },
      ],
    },
    {
      label: "Amount Required",
      name: "amountRequired",
      options: [
        { label: "$0 - $100,000", value: "0-100000" },
        { label: "$100,000 - $500,000", value: "100000-500000" },
        { label: "$500,000 - $1,000,000", value: "500000-1000000" },
      ],
    },
    {
      label: "Deadline",
      name: "deadline",
      options: [
        { label: "Next 30 days", value: "30-days" },
        { label: "Next 90 days", value: "90-days" },
        { label: "Next 6 months", value: "6-months" },
      ],
    },
    {
      label: "Status",
      name: "status",
      options: [
        { label: "Open", value: "open" },
        { label: "Closed", value: "closed" },
        { label: "In Progress", value: "in-progress" },
      ],
    },
    {
      label: "Posted Date",
      name: "postedDate",
      options: [
        { label: "Last 7 days", value: "7-days" },
        { label: "Last 30 days", value: "30-days" },
        { label: "Last 6 months", value: "6-months" },
        { label: "All Time", value: "all-time" },
      ],
    },
  ];
  const [idea, setIdea] = useState(null);
  useEffect(() => {
    fetchIdeas();
  }, []);

  const fetchIdeas = async () => {
    try {
      const response = await axios.get(
        `${back_base_url}/api/v1/ent/entrepreneurs?status=Approved`
      );
      setIdea(response.data.entrepreneurs);
    } catch (error) {
      console.error("Error fetching idea details:", error);
    }
  };
  const handleFilterChange = (name, value, c) => {
    console.log(`Filter changed: ${name} = ${value} ${c}`);
    // Add logic to handle the filter change
  };
  const navigate = useNavigate();

  const handleCardClick = (id) => {
    navigate(`/ventura/all-ideas/${id}`);
  };
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const totalPages = 20;

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handlePageSizeChange = (size) => {
    setPageSize(size);
    setCurrentPage(1); 
  };
  const [message, setMessage] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalId, setIsModalId] = useState();
  const handleStartProcess = (id) => {
    setIsModalOpen(true);
    setIsModalId(id)
  };
  const token = localStorage.getItem("token");

  const handleConfirm = async () => {
    try {
      const response = await axios.put(
        `${back_base_url}/api/v1/ent/entrepreneur/${isModalId}/application-status`,
        {
          isApplication: "In Progress",
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      alert(response.data.message);
    } catch (error) {
      console.log({ error });
    }
    setIsModalOpen(false);
    setMessage("Process started successfully!");
  };

  const handleClose = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="flex flex-col gap-4 p-6 h-full">
      <h1 className="text-xl font-semibold">All Ideas</h1>
      {message && (
        <p className="text-green-700 font-semibold mb-4 border border-green-700 bg-green-100 px-4 py-3 rounded-lg mt-1">
          {message}
        </p>
      )}
      <FilterBySelect filters={filters} onFilterChange={handleFilterChange} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
        {idea?.map((item, index) => (
          <IdeaCard
            key={index}
            idea={item}
            onClick={handleCardClick}
            onClickInterested={handleStartProcess}
          />
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
        pageSize={pageSize}
        onPageSizeChange={handlePageSizeChange}
      />
      <Modal
        isOpen={isModalOpen}
        onClose={handleClose}
        onConfirm={handleConfirm}
        title="Start Process"
        message="Are you sure you want to start the process for this idea?"
      />
    </div>
  );
};
