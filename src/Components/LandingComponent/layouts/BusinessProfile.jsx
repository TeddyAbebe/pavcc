import React, { useEffect, useState } from "react";
import IdeaCard from "../../../Pages/Entrepreneur/IdeaCard";
import axios from "axios";
import { back_base_url } from "../../../Lib/config";
import { useNavigate } from "react-router-dom";

function Business() {
  const [idea, setIdea] = useState(null);
  const navigate = useNavigate();

  const handleCardClick = (id) => {
    navigate(`/idea-detail/${id}`);
  };
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

  return (
    <>
      <section className="working-process-one">
        <div className="container">
          <div className="section-title text-center">
            <div className="section-title__tagline">
              <span className="left" />
              <h4>Business Profiles </h4>
              <span className="right" />
            </div>
            <h2 className="section-title__title">Featured Businesses</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
            {idea?.slice(0, 3)?.map((item, index) => (
              <IdeaCard
                key={index}
                idea={item}
                onClick={handleCardClick}
                onClickInterested={""}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Business;
