import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { back_base_url } from "../../../Lib/config";
import image2 from "../../../assets/image1.jpg";
import { IoMdArrowDropleft, IoMdArrowDropright } from "react-icons/io";
export const IdeaDetails = () => {
  const { id } = useParams();
  const [ideaById, setIdeaById] = useState(null);

  useEffect(() => {
    fetchIdeasById();
  }, []);

  const fetchIdeasById = async () => {
    try {
      const response = await axios.get(
        `${back_base_url}/api/v1/ent/entrepreneurs/${id}`
      );
      const entrepreneur = response.data.entrepreneur;
      setIdeaById(entrepreneur);
    } catch (error) {
      console.error("Error fetching idea details:", error);
    }
  };

  const [isDisplay, setIsDisplay] = useState(0);

  if (!ideaById) {
    return <p>Loading...</p>;
  }

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
                  isDisplay === 0
                    ? "border-b-[2px] border-[#000] font-semibold"
                    : "text-sm"
                }`}
                onClick={() => setIsDisplay(0)}
              >
                Basic
              </span>
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
          {isDisplay === 0 && (
            <div className="mt-4 p-1 flex items-start gap-3">
              <div className="w-20 h-20 rounded-full overflow-hidden">
                <img
                  src={ideaById?.userId?.picture}
                  alt="photo"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col gap-2">
                <h1 className="font-medium">
                  {ideaById?.userId?.firstName} {ideaById?.userId?.middleName}{" "}
                  {ideaById?.userId?.lastName}
                </h1>
                <p className="text-blue-600 text-sm">
                  {ideaById?.userId?.email}
                </p>
                <p className="text-sm">{ideaById?.userId?.phoneNumber}</p>
                <p className="text-sm">
                  Street Number , Suite/Apt No , City , State , Zip code ,
                  Country
                </p>
                <div className=" flex justify-start ">
                  <div className="w-3/4 h-[25vh] overflow-hidden rounded-t-lg rounded-br-lg ">
                    <img
                      src={image2}
                      alt="image2"
                      className="w-full h-full object-cover cursor-pointer"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}
          {isDisplay === 1 && (
            <div className="mt-4 p-1 flex flex-col items-start gap-2">
              <h1 className="text-lg font-semibold">
                {ideaById?.businessSector}
              </h1>
              <p className="mb-2 text-sm">{ideaById?.legalStatus}</p>

              <p className="font-medium">Description</p>
              <p className="mb-2 text-sm">{ideaById?.discription}</p>

              <p className="font-medium">
                Attach Available Legal Documents (Upload)
              </p>
              <p className="mb-2 text-sm">{ideaById?.legalDocuments[0]}</p>

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

              <h2 className="text-lg font-semibold">Market Trends</h2>
              <p className="mb-2 text-sm">{ideaById?.marketTrends}</p>

              <h2 className="text-lg font-semibold">Current Competition</h2>
              <p className="mb-2 text-sm">{ideaById?.currentCompetition}</p>

              <h2 className="text-lg font-semibold">
                Your Advantage from Competition
              </h2>
              <p className="mb-2 text-sm">
                {ideaById?.advantageOverCompetition}
              </p>

              <h2 className="text-lg font-semibold">Company History</h2>
              <p className="mb-2 text-sm">{ideaById?.companyHistory}</p>

              <h2 className="text-lg font-semibold">Location and Facilities</h2>
              <p className="mb-2 text-sm">{ideaById?.locationFacilities}</p>

              <h2 className="text-lg font-semibold">Technology</h2>
              <p className="mb-2 text-sm">{ideaById?.technology}</p>

              <h2 className="text-lg font-semibold">Equipment & Tools</h2>
              <p className="mb-2 text-sm">{ideaById?.equipmentTools}</p>

              <h2 className="text-lg font-semibold">Intellectual Property</h2>
              <p className="mb-2 text-sm">{ideaById?.intellectualProperty}</p>

              <h2 className="text-lg font-semibold">Key Milestones</h2>
              <p className="mb-2 text-sm">{ideaById?.keyMilestones}</p>

              <h2 className="text-lg font-semibold">Key Metrics</h2>
              <p className="mb-2 text-sm">{ideaById?.keyMetrics}</p>

              <h2 className="text-lg font-semibold">Ownership & Structure</h2>
              <p className="mb-2 text-sm">{ideaById?.ownershipStructure}</p>

              <h2 className="text-lg font-semibold">Management Team</h2>
              <p className="mb-2 text-sm">{ideaById?.managementTeam}</p>

              <h2 className="text-lg font-semibold">Advisors</h2>
              <p className="mb-2 text-sm">{ideaById?.advisors}</p>
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
                  <tr>
                    <td className="p-2 border-b font-semibold">
                      Key Forecast Assumptions
                    </td>
                    <td className="p-2 border-b">
                      {ideaById?.keyForecastAssumptions}
                    </td>
                  </tr>
                  <tr>
                    <td className="p-2 border-b font-semibold">
                      Revenue Monthly Forecast Year 1
                    </td>
                    <td className="p-2 border-b">
                      ${ideaById?.revenueMonthlyForecastYear1}
                    </td>
                  </tr>
                  <tr>
                    <td className="p-2 border-b font-semibold">
                      Revenue Forecast Next 5 Years
                    </td>
                    <td className="p-2 border-b">
                      <ul className="list-disc list-inside">
                        <li>
                          Year 1: ${ideaById?.revenueForecastNext5Years?.year1}
                        </li>
                        <li>
                          Year 2: ${ideaById?.revenueForecastNext5Years?.year2}
                        </li>
                        <li>
                          Year 3: ${ideaById?.revenueForecastNext5Years?.year3}
                        </li>
                        <li>
                          Year 4: ${ideaById?.revenueForecastNext5Years?.year4}
                        </li>
                        <li>
                          Year 5: ${ideaById?.revenueForecastNext5Years?.year5}
                        </li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td className="p-2 border-b font-semibold">
                      Expenses Monthly Forecast Year 1
                    </td>
                    <td className="p-2 border-b">
                      ${ideaById?.expensesMonthlyForecastYear1}
                    </td>
                  </tr>
                  <tr>
                    <td className="p-2 border-b font-semibold">
                      Expenses Forecast Next 5 Years
                    </td>
                    <td className="p-2 border-b">
                      <ul className="list-disc list-inside">
                        <li>Year 1: ${ideaById?.expensesForecastNext5Years?.year1}</li>
                        <li>Year 2: ${ideaById?.expensesForecastNext5Years?.year1}</li>
                        <li>Year 3: ${ideaById?.expensesForecastNext5Years?.year1}</li>
                        <li>Year 4: ${ideaById?.expensesForecastNext5Years?.year1}</li>
                        <li>Year 5: ${ideaById?.expensesForecastNext5Years?.year1}</li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td className="p-2 border-b font-semibold">
                      Forecasted Net Profit (or Loss) Next 5 Years
                    </td>
                    <td className="p-2 border-b">
                      <ul className="list-disc list-inside">
                        <li>Year 1: ${ideaById?.forecastedNetProfitNext5Years?.year1}</li>
                        <li>Year 2: ${ideaById?.forecastedNetProfitNext5Years?.year1}</li>
                        <li>Year 3: ${ideaById?.forecastedNetProfitNext5Years?.year1}</li>
                        <li>Year 4: ${ideaById?.forecastedNetProfitNext5Years?.year1}</li>
                        <li>Year 5: ${ideaById?.forecastedNetProfitNext5Years?.year1}</li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td className="p-2 border-b font-semibold">
                      Stage of Investment
                    </td>
                    <td className="p-2 border-b">
                      {ideaById?.stageOfInvestment}
                    </td>
                  </tr>
                  <tr>
                    <td className="p-2 border-b font-semibold">
                      Type of Funding Requested
                    </td>
                    <td className="p-2 border-b">
                      {ideaById?.typeOfFundingRequested}
                    </td>
                  </tr>
                  <tr>
                    <td className="p-2 border-b font-semibold">Use of Funds</td>
                    <td className="p-2 border-b">{ideaById?.useOfFunds}</td>
                  </tr>
                  <tr>
                    <td className="p-2 border-b font-semibold">
                      Exit Strategy
                    </td>
                    <td className="p-2 border-b">{ideaById?.exitStrategy}</td>
                  </tr>
                  <tr>
                    <td className="p-2 border-b font-semibold">
                      Expected Return
                    </td>
                    <td className="p-2 border-b">
                      {ideaById?.expectedReturn} %
                    </td>
                  </tr>
                  <tr>
                    <td className="p-2 border-b font-semibold">
                      Regulatory Requirement
                    </td>
                    <td className="p-2 border-b">
                      {ideaById?.regulatoryRequirement}
                    </td>
                  </tr>
                  <tr>
                    <td className="p-2 border-b font-semibold">
                      Statement: Projected Profit and Loss
                    </td>
                    <td className="p-2 border-b">
                      {ideaById?.projectedProfitLoss[0]}
                    </td>
                  </tr>
                  <tr>
                    <td className="p-2 border-b font-semibold">
                      Statement: Projected Balance Sheet
                    </td>
                    <td className="p-2 border-b">
                      {ideaById?.projectedBalanceSheet[0]}
                    </td>
                  </tr>
                  <tr>
                    <td className="p-2 border-b font-semibold">
                      Statement: Cash Flow
                    </td>
                    <td className="p-2 border-b">
                      {ideaById?.cashFlowStatement[0]}
                    </td>
                  </tr>
                  <tr>
                    <td className="p-2 border-b font-semibold">
                      If successfully Funded Through PAVCC, are you willing to
                      allocate 5% Equity to PAVCC?
                    </td>
                    <td className="p-2 border-b">
                      {ideaById?.willingToAllocateEquityToPAVCC === true
                        ? "Yes"
                        : "No"}
                    </td>
                  </tr>
                  <tr>
                    <td className="p-2 border-b font-semibold">
                      If successfully Funded Through PAVCC, are you willing to
                      Allow PAVCC Financial Management Oversight by assigning a
                      PAVCC Auditor or a CFO?
                    </td>
                    <td className="p-2 border-b">
                      {ideaById?.willingForFinancialManagementOversight === true
                        ? "Yes"
                        : "No"}
                    </td>
                  </tr>
                  <tr>
                    <td className="p-2 border-b font-semibold">
                      Terms and Conditions
                    </td>
                    <td className="p-2 border-b">[Agree Checkbox]</td>
                  </tr>
                  <tr>
                    <td className="p-2 border-b font-semibold">Date</td>
                    <td className="p-2 border-b">
                      {new Date(ideaById?.deadline).toLocaleDateString()}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}
        </div>
        {/* <div>hello</div> */}
      </div>
    </div>
  );
};
