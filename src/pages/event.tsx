import { Card, CardBody, CardHeader, Button } from "@nextui-org/react";

function Event() {
    return (
        <section className="w-5/6 min-h-screen max-w-[800px] my-auto mx-auto p-4">

            <Card className="px-2">

                <CardBody className="w-full flex flex-row gap-2">

                    <div className="w-1/2 min-h-[400px] flex flex-col p-4">
                        <Card className="h-full mb-4">
                            <CardBody></CardBody>
                            {/* <Image /> */}
                        </Card>

                        <Button color="secondary">
                            Register
                        </Button>
                    </div>

                    <div className="w-1/2 p-4 flex flex-col min-h-fit max-h-screen gap-4">

                        <div className="flex justify-evenly">
                            <h2 className="w-2/5 text-xl sm:text-2xl">Event #1</h2>
                            <h3 className="w-[1px] bg-slate-300"></h3>
                            <h3 className="w-2/5 text-xl sm:text-2xl">35000/-</h3>
                        </div>

                        <Card className="m-4">
                            <CardHeader>Description</CardHeader>
                            <CardBody>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero inventore odit laudantium, repellat cum ea, architecto soluta blanditiis eos ipsa similique, sint repudiandae ut optio. Nihil cupiditate illo expedita ut.
                            </CardBody>
                        </Card>


                        <div className="flex justify-between p-2">
                            <Card className="w-1/2 m-2">
                                <CardHeader>Team Size</CardHeader>
                                <CardBody>
                                    <p className="text-2xl">4-6</p>
                                </CardBody>
                            </Card>

                            <Card className="w-1/2 m-2">
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
    );
}

export default Event;
