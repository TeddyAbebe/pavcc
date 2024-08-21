import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { SelectInput } from "../../../Components/SelectInput";
import { CheckboxInput } from "../../../Components/CheckboxInput";
import { TextInput } from "../../../Components/TextInput";
import countryList from "react-select-country-list";
import { ButtonUi } from "../../../Components/Button";
import Header from "../../../Components/LandingComponent/layouts/header";
import Footer from "../../../Components/LandingComponent/layouts/footer";

export const RegisterAndPay = () => {
  const { handleSubmit, control } = useForm();
  const options = countryList().getData();
  const token = localStorage.getItem("token");
  const onSubmit = async (data) => {
    try {
      const response = await axios.post(
        "http://localhost:4500/api/v1/investor/create",
        {
          memberCategory: "Free",
          investorCategory: [
            data.Buyback === true && "Buyback",
            data.Merger === true && "Merger",
            data.SecondarySale === true && "SecondarySale",
            data.Convertible === true && "Convertible",
          ],
          companyName: data.companyName,
          contactTitle: data.contactTitle,
          companyWebsite: data.companyWebsite,
          previousExperienceInvestingInAfrica:
            data.experienceInAfrica === "Yes",
          numberOfYearsInBusiness: data.yearsInBusiness,
          numberOfEmployees: data.numberOfEmployees,
          currentAssetAmountUnderManagement: data.currentAssetAmount,
          preferredBusinessSector: data.businessSector,
          serviceOtherSpecify: data.serviceOtherSpecify,
          preferredSingleInvestmentAmount: data.investmentAmount,
          normalEquityPercentage: data.equityPercentage,
          preferredExitStrategy: [
            data.VentureCapital === true && "VentureCapital",
            data.PrivateEquity === true && "PrivateEquity",
            data.HighNetworth === true && "HighNetworth",
            data.Foundation === true && "Foundation",
            data.NotForProfit === true && "NotForProfit",
            data.PublicEntity === true && "PublicEntity",
          ],
          preferredNumberOfYearsForExit: data.preferredExitYears,
          expectedReturnPercentage: data.expectedReturn,
          termsAndConditionsAgreed: data.termsAndConditions,
          reviewAndEditAgreed: data.reviewAndEditApplication,
          profileNumber: "INV123456",
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response.data);
      window.location.href = "/ventura/all-ideas";
    } catch (error) {
      console.error("Error submitting the form:", error);
    }
  };

  return (
    <div className="page-wrapper">
      <Header />
      <div className="py-20">
        <div className="p-6 max-w-4xl mx-auto bg-white shadow-lg rounded-lg">
          <div>
            <h1 className="text-2xl font-bold mb-4">Register and Pay</h1>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-4 bg-[#f5f5f5] p-8 rounded-lg shadow-lg"
            >
              <div className="grid grid-cols-3 gap-2 ">
                <TextInput
                  label="Company Name"
                  name="companyName"
                  control={control}
                  rules={{ required: "Company Name is required" }}
                  className={"text-white"}
                />

                <TextInput
                  label="Contact Title"
                  name="contactTitle"
                  control={control}
                  className={"text-white"}
                />
                <TextInput
                  label="Company Website"
                  name="companyWebsite"
                  control={control}
                  className={"text-white"}
                />
              </div>
              <div className="grid grid-cols-2 gap-2 ">
                <SelectInput
                  label="Previous Experience Investing in Africa?"
                  name="experienceInAfrica"
                  control={control}
                  options={[
                    { value: "Yes", label: "Yes" },
                    { value: "No", label: "No" },
                  ]}
                />
                <TextInput
                  label="Number of Years in business"
                  name="yearsInBusiness"
                  control={control}
                  type="number"
                  className={"text-white"}
                />
              </div>
              <div className="grid grid-cols-2 gap-2 ">
                <TextInput
                  label="Number of Employees"
                  name="numberOfEmployees"
                  control={control}
                  type="number"
                  className={"text-white"}
                />
                <TextInput
                  label="Current Asset $ Amount Under Management"
                  name="currentAssetAmount"
                  control={control}
                  type="number"
                  rules={{
                    required:
                      "Current Asset $ Amount Under Management is required",
                  }}
                  className={"text-white"}
                />
              </div>
              <div className="grid grid-cols-2 gap-2 ">
                <SelectInput
                  label="Business Sector you prefer to invest"
                  name="businessSector"
                  control={control}
                  options={[
                    { value: "Agriculture", label: "Agriculture" },
                    { value: "Agro-processing", label: "Agro-processing" },
                    { value: "Ecommerce", label: "Ecommerce" },
                    { value: "Education", label: "Education" },
                    { value: "Health", label: "Health" },
                    { value: "Manufacturing", label: "Manufacturing" },
                    { value: "Mining", label: "Mining" },
                    { value: "Retail", label: "Retail" },
                    { value: "Service", label: "Service" },
                    { value: "Technology", label: "Technology" },
                    { value: "Transportation", label: "Transportation" },
                    { value: "Other", label: "Other" },
                  ]}
                />
                <TextInput
                  label="Normal Equity Percentage You Demand"
                  name="equityPercentage"
                  control={control}
                  className={"text-white"}
                />
              </div>
              <TextInput
                label="Preferred Single Investment Amount You are Interested to Make (you may provide range)"
                name="investmentAmount"
                control={control}
                className={"text-white"}
              />
              <div className="grid grid-cols-2 gap-2 ">
                <TextInput
                  label="Preferred Number of Years for Exit"
                  name="preferredExitYears"
                  control={control}
                  type="number"
                  className={"text-white"}
                />
                <TextInput
                  label="Expected Return (%)"
                  name="expectedReturn"
                  control={control}
                  type="number"
                  className={"text-white"}
                />
              </div>

              <div className="mb-4">
                <h3 className="text-lg font-semibold">
                  Preferred Exit Strategy (Pick all that apply)
                </h3>
                <CheckboxInput
                  label="Buyback"
                  name="Buyback"
                  control={control}
                />
                <CheckboxInput
                  label="Merger & Acquisition"
                  name="Merger"
                  control={control}
                />
                <CheckboxInput
                  label="Secondary Sale"
                  name="SecondarySale"
                  control={control}
                />
                <CheckboxInput label="IPO" name="IPO" control={control} />
                <CheckboxInput
                  label="Convertible Note"
                  name="Convertible"
                  control={control}
                />
              </div>
              <div className="mb-4">
                <h3 className="text-lg font-semibold">
                  Investor Category (Mark all that apply)
                </h3>
                <CheckboxInput
                  label="Venture Capital"
                  name="VentureCapital"
                  control={control}
                />
                <CheckboxInput
                  label="Private Equity"
                  name="PrivateEquity"
                  control={control}
                />
                <CheckboxInput
                  label="High Net-worth"
                  name="HighNetworth"
                  control={control}
                />
                <CheckboxInput
                  label="Foundation"
                  name="Foundation"
                  control={control}
                />
                <CheckboxInput
                  label="Not-for-profit"
                  name="NotForProfit"
                  control={control}
                />
                <CheckboxInput
                  label="Public Entity / Government"
                  name="PublicEntity"
                  control={control}
                />
              </div>
              <CheckboxInput
                label="I have reviewed and edited my application"
                name="reviewAndEditApplication"
                control={control}
                rules={{
                  required: "You must review and agree to the application",
                }}
              />
              <CheckboxInput
                label="I agree to the Terms and Conditions"
                name="termsAndConditions"
                control={control}
                rules={{
                  required: "You must agree to the terms and conditions",
                }}
              />
              <ButtonUi
                label="Submit"
                type="submit"
                className="bg-green-700 w-full py-2 text-white font-semibold"
              />
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
