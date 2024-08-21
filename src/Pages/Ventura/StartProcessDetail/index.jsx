import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ButtonUi } from "../../../Components/Button";
import { back_base_url } from "../../../Lib/config";
import MembershipCard from "../Dashboard/MembershipCard";
import { IoMdArrowDropleft, IoMdArrowDropright } from "react-icons/io";
import jwt_decode from "jwt-decode";
export const StartProcessDetail = () => {
  const token = localStorage.getItem("token");
  const decodedToken = jwt_decode(token);
  console.log(decodedToken);

  const { id } = useParams();
  const [ideaById, setIdeaById] = useState(null);

  useEffect(() => {
    fetchIdeasById();
  }, []);

  const fetchIdeasById = async () => {
    try {
      const response = await axios.get(
        `${back_base_url}/api/v1/ent/entrepreneuridea/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const entrepreneur = response.data.entrepreneur;
      window.localStorage.setItem("token" , response.data.token)
      setIdeaById(entrepreneur);
    } catch (error) {
      console.error("Error fetching idea details:", error);
    }
  };
  const [isDisplay, setIsDisplay] = useState(1);
  if (!ideaById) {
    return <p>Idea not found</p>;
  }

  const handleConfirm = async () => {
    try {
      const response = await axios.put(
        `${back_base_url}/api/v1/ent/entrepreneur/${id}/application-status`,
        {
          isApplication: "Closed",
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
  };
  const handleRegisterPremium = async () => {
    try {
      const response = await axios.post(
        `${back_base_url}/api/v1/auth/payment`,
        {
          amount: 500,
          entrepreneurId: id,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      window.location.href = response.data.url;
    } catch (error) {
      console.log({ error });
    }
  };
  const handleRegisterGold = async () => {
    try {
      const response = await axios.post(
        `${back_base_url}/api/v1/auth/payment`,
        {
          amount: 5000,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      window.location.href = response.data.url;
    } catch (error) {
      console.log({ error });
    }
  };
  return (
    <div className="p-12">
      <div className="grid grid-cols-2 gap-2 mb-10">
        <div className="flex flex-col gap-2 items-start h-full justify-between">
          <div className="flex flex-col gap-3">
            <span className="text-lg font-bold">{ideaById?.title}</span>
            <span>{ideaById?.businessSector}</span>
          </div>
          <hr className="my-4 border-[.5px] border-dotted w-full " />
          <div className="flex items-center justify-between mb-2 w-full">
            <div className="flex flex-col">
              <span className=" font-bold">{ideaById?.howManyUsersView}</span>
              <span className="text-xs text-gray-400">View</span>
            </div>
            <div className="flex flex-col">
              <span className=" font-bold">{ideaById?.updatedBy?.length}</span>
              <span className="text-xs text-gray-400">Investor</span>
            </div>
            <div className="flex flex-col">
              <span className=" font-bold">
                $ {ideaById?.investmentNeededUSD}
              </span>
              <span className="text-xs text-gray-400">Min. Investment</span>
            </div>
          </div>
          <ButtonUi
            label="Loss Interest"
            type="button"
            className="bg-[#dba329] hover:bg-[#d4aa4d] px-10 font-semibold text-white py-1 text-sm"
            onClick={handleConfirm}
          />
        </div>
        <div className=" flex items-center justify-center">
          <div className="w-3/4 h-[25vh] overflow-hidden rounded-t-lg rounded-br-lg ">
            <img
              src={ideaById?.coverPageImage}
              alt="image1"
              className="w-full h-full object-cover "
            />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-2 mb-10">
        <div className="col-span-2">
          <div className="relative w-full flex items-center justify-center">
            {/* Left Arrow */}
            <button
              className="absolute left-0 z-10 h-full bg-white p-1"
              onClick={() => {
                document.getElementById("scroll-container").scrollLeft -= 150;
              }}
            >
              <IoMdArrowDropleft />
            </button>
            <div
              id="scroll-container"
              className="border-b max-w-[92%] border-[#0003] flex gap-4 overflow-x-scroll scrollbar-hide"
            >
              <span
                className={`px-4 cursor-pointer whitespace-nowrap ${
                  isDisplay === 1
                    ? "border-b-[2px] border-[#000] font-semibold"
                    : "text-sm"
                }`}
                onClick={() => setIsDisplay(1)}
              >
                Overview
              </span>
              <span
                className={`px-4 cursor-pointer whitespace-nowrap ${
                  isDisplay === 2
                    ? "border-b-[2px] border-[#000] font-semibold"
                    : "text-sm"
                }`}
                onClick={() => setIsDisplay(2)}
              >
                Challenges and Solutions
              </span>
              <span
                className={`px-4 cursor-pointer whitespace-nowrap ${
                  isDisplay === 3
                    ? "border-b-[2px] border-[#000] font-semibold"
                    : "text-sm"
                }`}
                onClick={() => setIsDisplay(3)}
              >
                Market and Operations
              </span>
              <span
                className={`px-4 cursor-pointer whitespace-nowrap ${
                  isDisplay === 4
                    ? "border-b-[2px] border-[#000] font-semibold"
                    : "text-sm"
                }`}
                onClick={() => setIsDisplay(4)}
              >
                Finance
              </span>
            </div>
            <button
              className="absolute top-0 right-0 z-10 h-full bg-white p-1"
              onClick={() => {
                document.getElementById("scroll-container").scrollLeft += 150;
              }}
            >
              <IoMdArrowDropright />
            </button>
          </div>
          {isDisplay === 1 && (
            <div className="mt-4 p-1 flex flex-col items-start gap-2">
              <h1 className="text-lg font-semibold">
                {ideaById?.businessSector}
              </h1>
              <p className="mb-2 text-sm">{ideaById?.legalStatus}</p>

              <p className="font-medium">Description</p>
              <p className="mb-2 text-sm">{ideaById?.discription}</p>

              <p className="font-medium">
                List of Products/Services Currently Producing/Providing
              </p>
              <p className="mb-2 text-sm">{ideaById?.productsServices}</p>

              <p className="font-medium">Number of Years in Business</p>
              <p className="mb-2 text-sm">{ideaById?.yearsInBusiness} years</p>

              <ul className="list-disc pl-4 mb-2">
                <li className="font-medium">
                  Revenue Last Three Years
                  <ul className="list-inside list-disc text-sm">
                    <li>Year 1: ${ideaById?.revenueLastThreeYears?.year1}</li>
                    <li>Year 2: ${ideaById?.revenueLastThreeYears?.year2}</li>
                    <li>Year 3: ${ideaById?.revenueLastThreeYears?.year3}</li>
                  </ul>
                </li>
              </ul>

              <p className="font-medium">Number of Existing Employees</p>
              <p className="mb-2 text-sm">
                {ideaById?.numberOfEmployees} employees
              </p>
            </div>
          )}
          {isDisplay === 2 && (
            <div className="mt-4 p-1 flex flex-col items-start gap-2">
              <h2 className="text-lg font-semibold">
                Problem Your Business Will Solve
              </h2>
              <p className="mb-2 text-sm">{ideaById?.problemSolved}</p>

              <h2 className="text-lg font-semibold">Your Solution</h2>
              <p className="mb-2 text-sm">{ideaById?.solution}</p>

              <h2 className="text-lg font-semibold">SWOT Analysis</h2>
              <ul className="list-disc pl-4 mb-2 text-sm ">
                <li>{ideaById?.swotAnalysis}</li>
              </ul>

              <h2 className="text-lg font-semibold">
                Market Size and Segments
              </h2>
              <p className="mb-2 text-sm">{ideaById?.marketSizeSegments}</p>

              <h2 className="text-lg font-semibold">Key Customers</h2>
              <p className="mb-2 text-sm">{ideaById?.keyCustomers}</p>

              <h2 className="text-lg font-semibold">Barriers to Entry</h2>
              <p className="mb-2 text-sm">{ideaById?.barriersToEntry}</p>

              <h2 className="text-lg font-semibold">Risk Mitigation</h2>
              <p className="mb-2 text-sm">{ideaById?.riskMitigation}</p>
            </div>
          )}
          {isDisplay === 3 && (
            <div className="mt-4 p-1 flex flex-col items-start gap-2">
              <h2 className="text-lg font-semibold">Future Markets</h2>
              <p className="mb-2 text-sm">{ideaById?.futureMarkets}</p>
              <>
                <h2 className="text-lg font-semibold">Market Trends</h2>
                {ideaById?.marketTrends ? (
                  <p className="mb-2 text-sm">{ideaById?.marketTrends}</p>
                ) : (
                  <p className="text-red-600">paid Information</p>
                )}
              </>
              <>
                <h2 className="text-lg font-semibold">Current Competition</h2>
                {ideaById?.currentCompetition ? (
                  <p className="mb-2 text-sm">{ideaById?.currentCompetition}</p>
                ) : (
                  <p className="text-red-600">paid Information</p>
                )}
              </>
              <>
                <h2 className="text-lg font-semibold">
                  Your Advantage from Competition
                </h2>
                {ideaById?.advantageOverCompetition ? (
                  <p className="mb-2 text-sm">
                    {ideaById?.advantageOverCompetition}
                  </p>
                ) : (
                  <p className="text-red-600">paid Information</p>
                )}
              </>
              <>
                <h2 className="text-lg font-semibold">Company History</h2>
                {ideaById?.companyHistory ? (
                  <p className="mb-2 text-sm">{ideaById?.companyHistory}</p>
                ) : (
                  <p className="text-red-600">paid Information</p>
                )}
              </>
              <>
                <h2 className="text-lg font-semibold">
                  Location and Facilities
                </h2>
                {ideaById?.locationFacilities ? (
                  <p className="mb-2 text-sm">{ideaById?.locationFacilities}</p>
                ) : (
                  <p className="text-red-600">paid Information</p>
                )}
              </>
              <>
                <h2 className="text-lg font-semibold">Technology</h2>
                {ideaById?.technology ? (
                  <p className="mb-2 text-sm">{ideaById?.technology}</p>
                ) : (
                  <p className="text-red-600">paid Information</p>
                )}
              </>
              <>
                <h2 className="text-lg font-semibold">Equipment & Tools</h2>
                {ideaById?.equipmentTools ? (
                  <p className="mb-2 text-sm">{ideaById?.equipmentTools}</p>
                ) : (
                  <p className="text-red-600">paid Information</p>
                )}
              </>
              <>
                <h2 className="text-lg font-semibold">Intellectual Property</h2>
                {ideaById?.intellectualProperty ? (
                  <p className="mb-2 text-sm">
                    {ideaById?.intellectualProperty}
                  </p>
                ) : (
                  <p className="text-red-600">paid Information</p>
                )}
              </>
              <>
                <h2 className="text-lg font-semibold">Key Milestones</h2>
                {ideaById?.keyMilestones ? (
                  <p className="mb-2 text-sm">{ideaById?.keyMilestones}</p>
                ) : (
                  <p className="text-red-600">paid Information</p>
                )}
              </>
              <>
                <h2 className="text-lg font-semibold">Key Metrics</h2>
                {ideaById?.keyMetrics ? (
                  <p className="mb-2 text-sm">{ideaById?.keyMetrics}</p>
                ) : (
                  <p className="text-red-600">paid Information</p>
                )}
              </>
              <>
                <h2 className="text-lg font-semibold">Ownership & Structure</h2>
                {ideaById?.ownershipStructure ? (
                  <p className="mb-2 text-sm">{ideaById?.ownershipStructure}</p>
                ) : (
                  <p className="text-red-600">paid Information</p>
                )}
              </>
              <>
                <h2 className="text-lg font-semibold">Management Team</h2>
                {ideaById?.managementTeam ? (
                  <p className="mb-2 text-sm">{ideaById?.managementTeam}</p>
                ) : (
                  <p className="text-red-600">paid Information</p>
                )}
              </>
              <>
                <h2 className="text-lg font-semibold">Advisors</h2>
                {ideaById?.advisors ? (
                  <p className="mb-2 text-sm">{ideaById?.advisors}</p>
                ) : (
                  <p className="text-red-600">paid Information</p>
                )}
              </>
            </div>
          )}
          {isDisplay === 4 && (
            <div className="mt-4 p-1">
              <h2 className="text-lg font-semibold mb-2">Finance Details</h2>
              <table className="min-w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-gray-100 border-b">
                    <th className="p-2 border-r">Category</th>
                    <th className="p-2 border-r w-[200px]">Details</th>
                  </tr>
                </thead>
                <tbody>
                  <>
                    <tr>
                      <td className="p-2 border-b font-semibold">
                        Key Forecast Assumptions
                      </td>
                      {ideaById?.keyForecastAssumptions ? (
                        <td className="p-2 border-b">
                          {ideaById?.keyForecastAssumptions}
                        </td>
                      ) : (
                        <td className="border-b text-red-600">
                          paid Information
                        </td>
                      )}
                    </tr>
                  </>
                  <>
                    <tr>
                      <td className="p-2 border-b font-semibold">
                        Revenue Monthly Forecast Year 1
                      </td>
                      {ideaById?.revenueMonthlyForecastYear1 ? (
                        <td className="p-2 border-b">
                          ${ideaById?.revenueMonthlyForecastYear1}
                        </td>
                      ) : (
                        <td className="border-b text-red-600">
                          paid Information
                        </td>
                      )}
                    </tr>
                  </>
                  <>
                    <tr>
                      <td className="p-2 border-b font-semibold">
                        Revenue Forecast Next 5 Years
                      </td>
                      {ideaById?.revenueForecastNext5Years ? (
                        <td className="p-2 border-b">
                          <ul className="list-disc list-inside">
                            <li>
                              Year 1: $
                              {ideaById?.revenueForecastNext5Years?.year1}
                            </li>
                            <li>
                              Year 2: $
                              {ideaById?.revenueForecastNext5Years?.year2}
                            </li>
                            <li>
                              Year 3: $
                              {ideaById?.revenueForecastNext5Years?.year3}
                            </li>
                            <li>
                              Year 4: $
                              {ideaById?.revenueForecastNext5Years?.year4}
                            </li>
                            <li>
                              Year 5: $
                              {ideaById?.revenueForecastNext5Years?.year5}
                            </li>
                          </ul>
                        </td>
                      ) : (
                        <td className="border-b text-red-600">
                          paid Information
                        </td>
                      )}
                    </tr>
                  </>
                  <>
                    <tr>
                      <td className="p-2 border-b font-semibold">
                        Expenses Monthly Forecast Year 1
                      </td>
                      {ideaById?.expensesMonthlyForecastYear1 ? (
                        <td className="p-2 border-b">
                          ${ideaById?.expensesMonthlyForecastYear1}
                        </td>
                      ) : (
                        <td className="border-b text-red-600">
                          paid Information
                        </td>
                      )}
                    </tr>
                  </>
                  <>
                    <tr>
                      <td className="p-2 border-b font-semibold">
                        Expenses Forecast Next 5 Years
                      </td>
                      {ideaById?.expensesForecastNext5Years ? (
                        <td className="p-2 border-b">
                          <ul className="list-disc list-inside">
                            <li>
                              Year 1: $
                              {ideaById?.expensesForecastNext5Years?.year1}
                            </li>
                            <li>
                              Year 2: $
                              {ideaById?.expensesForecastNext5Years?.year1}
                            </li>
                            <li>
                              Year 3: $
                              {ideaById?.expensesForecastNext5Years?.year1}
                            </li>
                            <li>
                              Year 4: $
                              {ideaById?.expensesForecastNext5Years?.year1}
                            </li>
                            <li>
                              Year 5: $
                              {ideaById?.expensesForecastNext5Years?.year1}
                            </li>
                          </ul>
                        </td>
                      ) : (
                        <td className="border-b text-red-600">
                          paid Information
                        </td>
                      )}
                    </tr>
                  </>
                  <>
                    <tr>
                      <td className="p-2 border-b font-semibold">
                        Forecasted Net Profit (or Loss) Next 5 Years
                      </td>
                      {ideaById?.forecastedNetProfitNext5Years ? (
                        <td className="p-2 border-b">
                          <ul className="list-disc list-inside">
                            <li>
                              Year 1: $
                              {ideaById?.forecastedNetProfitNext5Years?.year1}
                            </li>
                            <li>
                              Year 2: $
                              {ideaById?.forecastedNetProfitNext5Years?.year1}
                            </li>
                            <li>
                              Year 3: $
                              {ideaById?.forecastedNetProfitNext5Years?.year1}
                            </li>
                            <li>
                              Year 4: $
                              {ideaById?.forecastedNetProfitNext5Years?.year1}
                            </li>
                            <li>
                              Year 5: $
                              {ideaById?.forecastedNetProfitNext5Years?.year1}
                            </li>
                          </ul>
                        </td>
                      ) : (
                        <td className="border-b text-red-600">
                          paid Information
                        </td>
                      )}
                    </tr>
                  </>
                  <>
                    <tr>
                      <td className="p-2 border-b font-semibold">
                        Stage of Investment
                      </td>
                      {ideaById?.stageOfInvestment ? (
                        <td className="p-2 border-b">
                          {ideaById?.stageOfInvestment}
                        </td>
                      ) : (
                        <td className="border-b text-red-600">
                          paid Information
                        </td>
                      )}
                    </tr>
                  </>
                  <>
                    <tr>
                      <td className="p-2 border-b font-semibold">
                        Type of Funding Requested
                      </td>
                      {ideaById?.typeOfFundingRequested ? (
                        <td className="p-2 border-b">
                          {ideaById?.typeOfFundingRequested}
                        </td>
                      ) : (
                        <td className="border-b text-red-600">
                          paid Information
                        </td>
                      )}
                    </tr>
                  </>
                  <>
                    <tr>
                      <td className="p-2 border-b font-semibold">
                        Use of Funds
                      </td>
                      {ideaById?.useOfFunds ? (
                        <td className="p-2 border-b">{ideaById?.useOfFunds}</td>
                      ) : (
                        <td className="border-b text-red-600">
                          paid Information
                        </td>
                      )}
                    </tr>
                  </>
                  <>
                    <tr>
                      <td className="p-2 border-b font-semibold">
                        Exit Strategy
                      </td>
                      {ideaById?.exitStrategy ? (
                        <td className="p-2 border-b">
                          {ideaById?.exitStrategy}
                        </td>
                      ) : (
                        <td className="border-b text-red-600">
                          paid Information
                        </td>
                      )}
                    </tr>
                  </>
                  <>
                    <tr>
                      <td className="p-2 border-b font-semibold">
                        Expected Return
                      </td>
                      {ideaById?.expectedReturn ? (
                        <td className="p-2 border-b">
                          {ideaById?.expectedReturn} %
                        </td>
                      ) : (
                        <td className="border-b text-red-600">
                          paid Information
                        </td>
                      )}
                    </tr>
                  </>
                  <>
                    <tr>
                      <td className="p-2 border-b font-semibold">
                        Regulatory Requirement
                      </td>
                      {ideaById?.regulatoryRequirement ? (
                        <td className="p-2 border-b">
                          {ideaById?.regulatoryRequirement}
                        </td>
                      ) : (
                        <td className="border-b text-red-600">
                          paid Information
                        </td>
                      )}
                    </tr>
                  </>
                  <>
                    <tr>
                      <td className="p-2 border-b font-semibold">
                        Statement: Projected Profit and Loss
                      </td>
                      {ideaById?.projectedProfitLoss?.[0] ? (
                        <td className="p-2 border-b">
                          {ideaById?.projectedProfitLoss?.[0]}
                        </td>
                      ) : (
                        <td className="border-b text-red-600">
                          paid Information
                        </td>
                      )}
                    </tr>
                  </>
                  <>
                    <tr>
                      <td className="p-2 border-b font-semibold">
                        Statement: Projected Balance Sheet
                      </td>
                      {ideaById?.projectedBalanceSheet?.[0] ? (
                        <td className="p-2 border-b">
                          {ideaById?.projectedBalanceSheet?.[0]}
                        </td>
                      ) : (
                        <td className="border-b text-red-600">
                          paid Information
                        </td>
                      )}
                    </tr>
                  </>
                  <>
                    <tr>
                      <td className="p-2 border-b font-semibold">
                        Statement: Cash Flow
                      </td>
                      {ideaById?.cashFlowStatement?.[0] ? (
                        <td className="p-2 border-b">
                          {ideaById?.cashFlowStatement?.[0]}
                        </td>
                      ) : (
                        <td className="border-b text-red-600">
                          paid Information
                        </td>
                      )}
                    </tr>
                  </>
                </tbody>
              </table>
            </div>
          )}
        </div>

        <div>
          <MembershipCard
            title="Premium Membership"
            description="Includes advanced features and priority support."
            price="$499.99/This Idea"
            onRegister={() => handleRegisterPremium()}
          />

          <MembershipCard
            title="Gold Membership"
            description="All benefits of Premium plus exclusive content."
            price="$4999.99/All Ideas"
            onRegister={() => handleRegisterGold()}
          />
        </div>
      </div>
    </div>
  );
};
