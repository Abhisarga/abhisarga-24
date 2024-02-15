import ErrorHandler from "@handlers/error";
import { IResponse } from "@types_/response";
import Models from "@utils/models";
import { Types } from "mongoose";
import { Arg, Mutation, Query, Resolver } from "type-graphql";
import Club from "@models/club"
import IClub, { ClubInput } from "@types_/club";

@Resolver(() => IClub)
export default class ClubResolver {
    private handler: ErrorHandler

    constructor() {
        this.handler = new ErrorHandler(Models.club)
    }

    @Query(() => IResponse)
    async Club(
        @Arg("id", () => String) id: Types.ObjectId
    ) {
        const club = await Club.findById(id)
        if(!club) {
            return this.handler.error("Bad Request! Please try again!")
        }
        return this.handler.success(club)
    }

    @Mutation(() => IResponse)
    async CreateClub(
        @Arg("input", () => ClubInput) input: IClub
    ) {
        delete input._id
        delete input.__v
        delete input.createdAt
        // delete input.lead._id
        // delete input.coLead._id
    

        console.log(input)
        const club = await Club.create({...input, socials: JSON.stringify(input.socials)})
        if(!club) {
            return this.handler.error("Bad Request! Please try again.")
        }
        return this.handler.success(club)
    }

    @Query(() => [IResponse])
    async AllClubs() {
        const clubs = await Club.find()
        if (!clubs) {
            return this.handler.error("No clubs found.")
        }
        return this.handler.success(clubs)
    }
}