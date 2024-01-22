import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Header from "@components/header";
import {
  Card,
  CardFooter,
  Image,
  Button,
  CardBody,
  CardHeader,
} from "@nextui-org/react";
function Details() {
  return (
    <>
      <Header />
      {/* <section className="flex flex-col items-center justify-center w-full h-screen">
        <Image
          isZoomed
          alt="NextUI Fruit Image with Zoom"
          src="https://images.unsplash.com/photo-1507475380673-1246fa72eeea?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG15dGhvbG9neXxlbnwwfHwwfHx8MA%3D%3D"
          className="w-full h-full my-auto mx-auto"
        />
      </section> */}
      <section className="w-full min-h-screen my-auto mx-auto p-4 flex flex-col gap-10">
        <Card className="px-2">
          <CardBody className="w-full flex flex-row gap-2">
            <div className="w-1/2 flex flex-col p-4">
              <Card className="h-full mb-4">
                <CardBody></CardBody>
                {/* <Image /> */}
              </Card>
            </div>

            <div className="w-1/2 p-4 flex flex-col min-h-fit max-h-screen gap-4">
              <div className="flex ml-4">
                <h1 className="font-bold text-large" style={{fontSize: '3rem'}}>Club Name</h1>
              </div>
              <div className="flex ml-4">
                <h1 className="text-s ">Abbrevation</h1>
              </div>

              <Card className="m-4">
                <CardHeader>Description</CardHeader>
                <CardBody>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Libero inventore odit laudantium, repellat cum ea, architecto
                  soluta blanditiis eos ipsa similique, sint repudiandae ut
                  optio. Nihil cupiditate illo expedita ut.
                </CardBody>
              </Card>

              <Card className="m-4">
                <CardBody>
                  <div className="flex flex-col gap-2">
                    <p>Emai: xyz@gmail.com</p>
                    <div className="flex flex-row items-center gap-2">
                      <p className="m-0">Follow Us:</p>
                      <FontAwesomeIcon icon={faInstagram} />
                      <FontAwesomeIcon icon={faLinkedin} />
                    </div>
                  </div>
                </CardBody>
              </Card>
            </div>
          </CardBody>
        </Card>

        <div className="w-1/2 flex flex-row mx-auto justify-evenly ">
          <Card className="py-4">
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
              <p className="text-tiny uppercase font-bold">Club Lead</p>
              <h4 className="font-bold text-large">Name</h4>
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
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
              <p className="text-tiny uppercase font-bold">Club Lead</p>
              <h4 className="font-bold text-large">Name</h4>
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
        </div>
      </section>
    </>
  );
}

export default Details;
