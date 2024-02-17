import { Card, CardBody, CardHeader, Button } from "@nextui-org/react";
import Header from "../../components/Header";
import { useParams } from "react-router-dom";

function Event() {
    const id = useParams().id;
    return (<>
        <Header />
        <section className="p-4">

            <Card className="px-2 bg-gray-800 w-full sm:max-w-[90%] min-h-[400px] sm:min-h-[600px] mx-auto">

                <CardBody className="w-full flex flex-col-reverse sm:flex-row gap-2">

                    <div className="w-full sm:w-1/2 min-h-[400px] flex flex-col p-4">
                        <Card className="h-full mb-4">
                            <CardBody className="justify-center">

                            <img src="/FStops/Logo_fstops.jpg"/>
                            </CardBody>
                        </Card>

                        <Button color="secondary" className="w-full">
                            Register
                        </Button>
                    </div>

                    <div className="w-full sm:w-1/2 p-4 flex flex-col gap-4">

                        <div className="flex flex-col sm:flex-row justify-center sm:justify-between">
                            <h2 className="text-center w-full sm:w-2/5 text-xl sm:text-2xl mb-2">Event #1</h2>
                            <h3 className="hidden sm:block w-[1px] bg-slate-300"></h3>
                            <h3 className="text-center w-full sm:w-2/5 text-xl sm:text-2xl">35000/-</h3>
                        </div>

                        <Card className="m-4">
                            <CardHeader>Description</CardHeader>
                            <CardBody>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero inventore odit laudantium, repellat cum ea, architecto soluta blanditiis eos ipsa similique, sint repudiandae ut optio. Nihil cupiditate illo expedita ut.
                                {id}
                            </CardBody>
                        </Card>


                        <div className="flex flex-col sm:flex-row justify-between p-2">
                            <Card className="w-full sm:w-1/2 m-2">
                                <CardHeader>Team Size</CardHeader>
                                <CardBody>
                                    <p className="text-2xl">4-6</p>
                                </CardBody>
                            </Card>

                            <Card className="w-full sm:w-1/2 m-2">
                                <CardHeader>No. of rounds</CardHeader>
                                <CardBody>
                                    <p className="text-2xl">3</p>
                                </CardBody>
                            </Card>
                        </div>

                        <Card className="m-4">
                            <CardHeader>
                                Organisers
                            </CardHeader>
                            <CardBody>
                                Lorem ipsum
                            </CardBody>
                        </Card>


                    </div>
                </CardBody>
            </Card>
            
        </section>
    </>);
}

export default Event;
