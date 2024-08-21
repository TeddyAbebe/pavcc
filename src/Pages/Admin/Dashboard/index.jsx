import React, { useEffect, useState } from "react";
import { SummaryCard } from "../../../Components/Summary";
import { FaRegLightbulb } from "react-icons/fa";
import { Bar, Pie, Line } from "react-chartjs-2";
import "chart.js/auto";
import { RecentActivities } from "./RecentActivities";
import { GiCapitol } from "react-icons/gi";
import { FaClipboardUser } from "react-icons/fa6";
import axios from "axios";
import { back_base_url } from "../../../Lib/config";

export const AdminDashboard = () => {
  const [count, setCount] = useState();
  const [countIdea, setCountIdea] = useState();
  useEffect(() => {
    fatchData();
  }, []);
  const fatchData = async () => {
    try {
      const response = await axios.get(
        `${back_base_url}/api/v1/auth/count-users-by-role`
      );
      const response1 = await axios.get(
        `${back_base_url}/api/v1/ent/entrepreneur-idea-counts`
      );
      setCount(response.data.counts);
      setCountIdea(response1.data);
    } catch (error) {
      console.log({ error });
    }
  };

  const barData = {
    labels: ["Total Entrepreneur", "Total Investor","Total Ideas", "Approved Ideas"],
    datasets: [
      {
        label: `Count`,
        data: [
          count?.Entrepreneur,
          count?.Investor,
          countIdea?.totalEntrepreneurIdeas,
          countIdea?.approvedEntrepreneurIdeas,
        ],
        backgroundColor: ["#3B82F6", "#22C55E", "#EAB308", "#EF4444"],
      },
    ],
  };

  const pieData = {
    labels: ["Total Entrepreneur", "Total Investor","Total Ideas", "Approved Ideas"],
    datasets: [
      {
        data: [
          count?.Entrepreneur,
          count?.Investor,
          countIdea?.totalEntrepreneurIdeas,
          countIdea?.approvedEntrepreneurIdeas,
        ],
        backgroundColor: ["#3B82F6", "#22C55E", "#EAB308", "#EF4444"],
      },
    ],
  };

  const lineData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [
      {
        label: "User Growth",
        data: [10, 15, 20, 25, 30, 30, 40],
        borderColor: "#3B82F6",
        backgroundColor: "rgba(59, 130, 246, 0.2)",
      },
    ],
  };

  return (
    <div className="p-6">
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        <SummaryCard
          title="Total Entrepreneur"
          value={count?.Entrepreneur}
          icon={<FaClipboardUser />}
          bgColor="bg-green-500"
        />
        <SummaryCard
          title="Total Investor"
          value={count?.Investor}
          icon={<FaRegLightbulb />}
          bgColor="bg-yellow-500"
        />
        <SummaryCard
          title="Total Ideas"
          value={countIdea?.totalEntrepreneurIdeas}
          icon={<GiCapitol />}
          bgColor="bg-blue-500"
        />
        <SummaryCard
          title="Approved Ideas"
          value={countIdea?.approvedEntrepreneurIdeas}
          icon={<FaRegLightbulb />}
          bgColor="bg-red-500"
        />
      </div>

      <div className="grid md:grid-cols-4 gap-4 mt-4">
        <div className="md:col-span-2 max-h-[45vh] w-full flex flex-col bg-white shadow rounded-lg p-4">
          <h2 className="text-lg font-semibold mb-2">
            Ideas Distribution (Bar Chart)
          </h2>
          <Bar data={barData} />
        </div>
        <div className="max-h-[45vh] w-full flex flex-col bg-white shadow rounded-lg p-4">
          <h2 className="font-semibold mb-2">Ideas Distribution (Pie Chart)</h2>
          <Pie data={pieData} />
        </div>
        <div className="max-h-[45vh] w-full flex flex-col bg-white shadow rounded-lg p-4">
          <h2 className="font-semibold mb-2">User Growth (Line Chart)</h2>
          <Line data={lineData} />
        </div>
      </div>

      {/* Recent Activities */}
      <div className="mt-6">
        <RecentActivities />
      </div>
    </div>
  );
};
