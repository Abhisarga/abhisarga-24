import { faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card, CardBody, CardHeader, Image } from "@nextui-org/react";
import { useParams } from "react-router-dom";
import Header from "../../components/Header";
import { useGetRequest } from "../../hooks/fetcher";
import schema from "../../utils/schema";
import { Link } from "react-router-dom";


function Details() {
    const id = useParams().id;
    const { data, mutation, isLoading, isValidating } = useGetRequest(schema.queries.club.getById, {
        clubId: id
    })
    const clubDetails = data?.Club?.data
    console.log(clubDetails)
    return (
        <>
            <Header />
            <section className="w-full min-h-screen my-auto mx-auto p-4 flex flex-col gap-10">
                <Card className="px-2">
                    <CardBody className="w-full flex flex-col sm:flex-row gap-2">
                        <div className="w-full sm:w-1/2 flex flex-col p-4">
                            <Card className="h-full mb-4">
                                <CardBody>
                                    <img src={`/Logos/${clubDetails?.logo}`} />
                                </CardBody>
                            </Card>
                        </div>

                        <div className="w-full sm:w-1/2 p-4 flex flex-col gap-4">
                            <div className="flex justify-center sm:justify-start">
                                <h1 className="font-bold text-3xl sm:text-4xl">{clubDetails?.name}</h1>
                            </div>
                            <div className="flex justify-center sm:justify-start">
                                <h1 className="text-sm sm:text-base">{clubDetails?.abbreviation}</h1>
                            </div>

                            <Card className="m-4">
                                <CardHeader>Description</CardHeader>
                                <CardBody>
                                    {clubDetails?.description}
                                </CardBody>
                            </Card>

                            <Card className="m-4">
                                <CardBody>
                                    <div className="flex flex-col gap-2">
                                        <p>Email: <Link to={`mailto:${clubDetails?.socials?.email}`}>{clubDetails?.socials?.email}</Link></p>
                                        <div className="flex flex-row items-center gap-2">
                                            <p className="m-0">Follow Us:</p>
                                            <Link to={clubDetails?.socials?.instagram}><FontAwesomeIcon icon={faInstagram} /></Link>
                                            <Link to={clubDetails?.socials?.linkedin}><FontAwesomeIcon icon={faLinkedin} /></Link>
                                        </div>
                                    </div>
                                </CardBody>
                            </Card>
                        </div>
                    </CardBody>
                </Card>

                <div className="w-full flex flex-col sm:flex-row mx-auto justify-center sm:justify-between ">
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
                </div>
            </section>
        </>
    );
}

export default Details;
