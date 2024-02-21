import {
  faDropbox,
  faGoogle,
  faInstagram,
  faLinkedin,
  faMailchimp,
  faSquareLetterboxd,
  faYahoo,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card, CardBody, CardHeader, Image } from "@nextui-org/react";
import { useParams } from "react-router-dom";

import { useGetRequest } from "../../hooks/fetcher";
import schema from "../../utils/schema";
import { Link } from "react-router-dom";
import ImgElements from "../../components/helpers/ImgElements";

function Details() {
  const id = useParams().id;
  const { data, mutation, isLoading, isValidating } = useGetRequest(
    schema.queries.club.getById,
    {
      clubId: id,
    }
  );
  const clubDetails = data?.Club?.data;
  // console.log(clubDetails);
  return (
    <>
      <section className="w-full min-h-fit my-auto mx-auto py-4 px-16 flex flex-col gap-10 bg-color1">
        <ImgElements theme={clubDetails?.theme} />
        <Card className="px-2 bg-color3 bg-opacity-90">
          <CardBody className="w-full flex flex-col sm:flex-row gap-2">
            <div className="w-full sm:w-1/2 flex flex-col h-[400px] sm:h-[650px] p-4">
              <Card className="h-full mb-4">
                <CardBody>
                  <img
                    src={`/Logos/${clubDetails?.logo}`}
                    className="w-full h-full object-cover"
                  />
                </CardBody>
              </Card>
            </div>

            <div className="w-full sm:w-1/2 p-4 flex flex-col gap-5">
              <div className="m-4 flex justify-between">
                <div>
                  <div className="flex justify-center sm:justify-start">
                    <h1 className="font-bold text-3xl sm:text-4xl">
                      {clubDetails?.name}
                    </h1>
                  </div>
                  <div className="flex justify-center sm:justify-start">
                    <h1 className="text-sm sm:text-base">
                      {clubDetails?.abbreviation}
                    </h1>
                  </div>
                </div>
                <div className="flex flex-row items-center gap-3">
                  <Link to={`mailto:${clubDetails?.socials?.email}`}>
                    <FontAwesomeIcon icon={faGoogle} className="text-3xl" />
                  </Link>
                  <Link to={clubDetails?.socials?.instagram}>
                    <FontAwesomeIcon icon={faInstagram} className="text-3xl" />
                  </Link>
                  <Link to={clubDetails?.socials?.linkedin}>
                    <FontAwesomeIcon icon={faLinkedin} className="text-3xl" />
                  </Link>
                </div>
              </div>

              <Card className="mx-4 p-1 h-[218px]">
                <CardHeader>Description</CardHeader>
                <CardBody className="h-52">{clubDetails?.description}</CardBody>
              </Card>

              {/* lead and co-lead details*/}
              <Card className="mx-4 p-2 ">
                <CardHeader>Club Members</CardHeader>
                <CardBody>
                  <Card className="m-1 w-90 h-17 ">
                    <CardBody className="flex flex-row gap-2">
                      <Image
                        src={"/images/hero-card-complete.jpeg"}
                        alt="img"
                        className="w-12 h-12 rounded-full"
                      />
                      <div className="flex flex-col text-left align-center w-full">
                        <div className="flex justify-end">
                          <h3 className="font-bold text-wrap w-full">
                            {clubDetails?.lead?.name}
                          </h3>
                          <p className="w-20 text-right">Lead</p>
                        </div>
                        <p className="text-xs text-left">
                          {clubDetails?.lead?.phone}
                        </p>
                      </div>
                    </CardBody>
                  </Card>
                  <Card className="m-1 w-90 h-17 ">
                    <CardBody className="flex flex-row gap-2">
                      <Image
                        src={"/images/hero-card-complete.jpeg"}
                        alt="img"
                        className="w-12 h-12 rounded-full"
                      />
                      <div className="flex flex-col text-left align-center w-full">
                        <div className="flex justify-end">
                          <h3 className="font-bold text-wrap w-full">
                            {clubDetails?.coLead?.name}
                          </h3>
                          <p className="w-20 text-right">Co Lead</p>
                        </div>
                        <p className="text-xs text-left">
                          {clubDetails?.coLead?.phone}
                        </p>
                      </div>
                    </CardBody>
                  </Card>
                </CardBody>
              </Card>
            </div>
          </CardBody>
        </Card>

        {/* <div className="w-full flex flex-col sm:flex-row mx-auto justify-center sm:justify-evenly ">
          <Card className="py-4">
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-center sm:items-start">
              <p className="text-xs uppercase font-bold">Club Lead</p>
              <h4 className="font-bold text-lg">Name</h4>
              <div className="flex flex-row justify-between items-center w-full">
                <small className="text-default-500">Email</small>
                <small className="text-default-500">Phone Number</small>
              </div>
            </CardHeader>
            <CardBody className="overflow-visible py-2">
              <Image
                alt="Card background"
                className="object-cover rounded-xl"
                src="/images/hero-card-complete.jpeg"
                width={270}
              />
            </CardBody>
          </Card>
          <Card className="py-4">
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-center sm:items-start">
              <p className="text-xs uppercase font-bold">Club Lead</p>
              <h4 className="font-bold text-lg">Name</h4>
              <div className="flex flex-row justify-between items-center w-full">
                <small className="text-default-500">Email</small>
                <small className="text-default-500">Phone Number</small>
              </div>
            </CardHeader>
            <CardBody className="overflow-visible py-2">
              <Image
                alt="Card background"
                className="object-cover rounded-xl"
                src="/images/hero-card-complete.jpeg"
                width={270}
              />
            </CardBody>
          </Card>
        </div> */}
      </section>
    </>
  );
}

export default Details;
