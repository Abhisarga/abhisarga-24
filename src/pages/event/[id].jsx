import { Card, CardBody, CardHeader, Button, Image } from "@nextui-org/react";
import Header from "../../components/Header";
import { Link, useParams } from "react-router-dom";
import { useGetRequest } from "../../hooks/fetcher";
import schema from "../../utils/schema";
import ImgElements from "../../components/helpers/ImgElements";

import TestUserImg from "../../assets/test/userImage.avif";

function Event() {
  const id = useParams().id;
  const { data, mutation, isLoading, isValidating } = useGetRequest(
    schema.queries.event.getById,
    {
      eventId: id,
    }
  );
  const eventDetails = data?.Event?.data;
  // const roundsDetails = data?.Event?.data?.rounds;
  console.log(eventDetails?.rounds?.length);  
  const roundsDetails = [
    {
      name: "Round 1",
      mode: "Solo",
      description: "This is the first round",
    },
    {
      name: "Round 2",
      mode: "Team",
      description: "This is the second round",
    },
    {
      name: "Round 3",
      mode: "Solo",
      description: "This is the third round",
    },
  ]
  return (
    <>
      <Header />
      <section className="p-4 bg-color1 relative">
        <ImgElements theme={eventDetails?.club?.theme} />
        <Card className="px-2 bg-color3 bg-opacity-90 border-red-900 border-2 w-full sm:max-w-[90%] min-h-[400px] sm:min-h-[600px] mx-auto">
          <CardBody className="w-full flex flex-col-reverse sm:flex-row gap-2">
            <div className="w-full sm:w-1/2 min-h-[650px] flex align-center justify-center flex-col p-4">
              <Card className="mb-4 bg-red-300 flex align-center justify-center">
                <Image src={`/posters/` + eventDetails?.poster} />
              </Card>
            </div>

            <div className="w-full h-[630px] overflow-y-auto sm:w-1/2 p-4 flex flex-col gap-3">
              <div className="flex flex-col sm:flex-row justify-center sm:justify-between m-4">
                <h2 className="text-left sm:w-2/5 text-xl sm:text-3xl font-bold text-wrap">
                  {eventDetails?.name}
                </h2>
                {/* <h3 className="hidden sm:block w-[1px] bg-slate-300"></h3> */}
                {/* <h3 className="text-right sm:w-2/5 text-xl sm:text-2xl font-bold">
                  {eventDetails?.prizePool}/-
                </h3> */}
                <Link to={eventDetails?.registrationLink}>
                  <Button color="secondary" className="px-8 font-bold">
                    Register
                  </Button>
                </Link>
              </div>

              <Card className="mx-4 p-2 min-h-[200px]">
                <CardHeader className="font-bold text-xl">
                  Description
                </CardHeader>
                <CardBody className="p-3 scrollbar-hide">
                  <div
                    dangerouslySetInnerHTML={{
                      __html: `${eventDetails?.description}`,
                    }}
                  />
                </CardBody>
              </Card>

              <div className="flex flex-col sm:flex-row justify-between p-2 min-h-[150px]">
                <Card className="w-full p-2 sm:w-1/2 m-2">
                  <CardHeader className="font-bold text-xl">
                    Number of rounds
                  </CardHeader>
                  <CardBody>
                    <p className="text-xl overflow-hidden">{eventDetails?.rounds?.length}</p>
                  </CardBody>
                </Card>

                <Card className="w-full p-2 sm:w-1/2 m-2">
                  <CardHeader className="font-bold text-xl">
                    Prize Pool
                  </CardHeader>
                  <CardBody>
                    <p className="text-xl overflow-hidden">
                      {eventDetails?.prizePool}/-
                    </p>
                  </CardBody>
                </Card>
              </div>

              <Card className="mx-4 p-4 min-h-[500px]">
                <p className="font-bold mb-4 text-xl">Stages and Timelines</p>
                {eventDetails?.rounds?.map((round, index) => (
                  <Card key={index} className=" w-90 h-[200px] mb-4 p-2">
                    <CardBody className="flex flex-row gap-2 scrollbar-hide">
                      <div
                        key={index}
                        className="flex flex-col text-left align-center"
                      >
                        <h3 className="font-bold text-wrap w-full">
                          {round.name}
                        </h3>
                        <p className="text-xs text-left">
                          <span className="font-bold">Mode: </span>
                          {round.mode}
                        </p>
                        <p className="py-4 font-semibold text-sm">
                          {" "}
                          Round Description :{" "}
                        </p>
                        <p>{round.description}</p>
                      </div>
                    </CardBody>
                  </Card>
                ))}
              </Card>

              <Card className="mx-4 p-2 min-h-[250px]">
                <CardHeader className="font-bold text-xl">
                  Organisers
                </CardHeader>
                <CardBody>
                  {eventDetails?.organizers?.map((organiser, index) => (
                    <Card key={index} className="m-1 w-90 h-17 ">
                      <CardBody className="flex flex-row gap-2 scrollbar-hide">
                        <img
                          src={TestUserImg}
                          alt="img"
                          className="w-12 h-12 rounded-full"
                        />
                        <div className="flex flex-col text-left align-center">
                          <h3 className="font-bold text-wrap w-full text-center">
                            {organiser.name}
                          </h3>
                          <p className="text-xs text-left">{organiser.phone}</p>
                        </div>
                      </CardBody>
                    </Card>
                  ))}
                </CardBody>
              </Card>
            </div>
          </CardBody>
        </Card>
      </section>
    </>
  );
}

export default Event;
