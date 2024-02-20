import { Card, CardBody, CardHeader, Button, Image } from "@nextui-org/react";
import Header from "../../components/Header";
import { useParams } from "react-router-dom";
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
  return (
    <>
      <Header />
      <section className="p-4 bg-color1 relative">
      <ImgElements  theme={eventDetails?.club?.theme} />
        <Card className="px-2 bg-color3 bg-opacity-90 border-red-900 border-2 w-full sm:max-w-[90%] min-h-[400px] sm:min-h-[600px] mx-auto">
          <CardBody className="w-full flex flex-col-reverse sm:flex-row gap-2">
            <div className="w-full sm:w-1/2 min-h-[650px] flex flex-col p-4 justify-between">
              <Card className="mb-4 bg-red-300 flex align-center justify-center">
                <Image src={`/posters/`+eventDetails?.poster} />
              </Card>

              <Button color="secondary" className="w-full">
                Register
              </Button>
            </div>

            <div className="w-full h-90 overflow-y-auto sm:w-1/2 p-4 flex flex-col gap-3">
              <div className="flex flex-col sm:flex-row justify-center sm:justify-between">
                <h2 className="text-center w-full sm:w-2/5 text-xl sm:text-2xl mb-2 font-bold text-wrap">
                  {eventDetails?.name}
                </h2>
                <h3 className="hidden sm:block w-[1px] bg-slate-300"></h3>
                <h3 className="text-center w-full sm:w-2/5 text-xl sm:text-2xl font-bold">
                  {eventDetails?.prizePool}/-
                </h3>
              </div>

              <Card className="mx-4 p-2 min-h-[200px]">
                <CardHeader>Description</CardHeader>
                <CardBody className="p-3">
                  <div
                    dangerouslySetInnerHTML={{
                      __html: `${eventDetails?.description}Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita labore soluta reiciendis aut, molestiae nihil quo dignissimos perferendis doloremque assumenda temporibus ipsa, aliquam eos reprehenderit repudiandae vel rerum. Tempora, dignissimos!  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita labore soluta reiciendis aut, molestiae nihil quo dignissimos perferendis doloremque assumenda temporibus ipsa, aliquam eos reprehenderit repudiandae vel rerum. Tempora, dignissimos! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita labore soluta reiciendis aut, molestiae nihil quo dignissimos perferendis doloremque assumenda temporibus ipsa, aliquam eos reprehenderit repudiandae vel rerum. Tempora, dignissimos! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita labore soluta reiciendis aut, molestiae nihil quo dignissimos perferendis doloremque assumenda temporibus ipsa, aliquam eos reprehenderit repudiandae vel rerum. Tempora, dignissimos! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita labore soluta reiciendis aut, molestiae nihil quo dignissimos perferendis doloremque assumenda temporibus ipsa, aliquam eos reprehenderit repudiandae vel rerum. Tempora, dignissimos! `,
                    }}
                  />              
                </CardBody>
              </Card>

              <div className="flex flex-col sm:flex-row justify-between p-2 min-h-[150px]">
                <Card className="w-full p-2 sm:w-1/2 m-2">
                  <CardHeader>Team Size</CardHeader>
                  <CardBody>
                    <p className="text-2xl">4-6</p>
                  </CardBody>
                </Card>

                <Card className="w-full p-2 sm:w-1/2 m-2">
                  <CardHeader>No. of rounds</CardHeader>
                  <CardBody>
                    <p className="text-2xl">{eventDetails?.rounds?.length}</p>
                  </CardBody>
                </Card>
              </div>

              <Card className="mx-4 p-2 min-h-[200px]">
                <CardHeader>Organisers</CardHeader>
                <CardBody>
                  {eventDetails?.organizers?.map((organiser, index) => (
                    <Card key={index} className="m-1 w-90 h-17 ">
                      <CardBody className="flex flex-row gap-2">
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
