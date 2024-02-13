import ErrorHandler from "@handlers/error";
import Sponsor from "@models/sponsor";
import { IResponse } from "@types_/response";
import ISponsor from "@types_/sponsor";
import Models from "@utils/models";
import { Types } from "mongoose";
import { Arg, Mutation, Query, Resolver } from "type-graphql";

@Resolver(() => ISponsor)
export default class SponsorResolver {
    private handler: ErrorHandler
    constructor() {
        this.handler = new ErrorHandler(Models.sponsor)
    }

    @Query(() => IResponse)
    async Sponsor(
        @Arg("id", () => String) id: Types.ObjectId
    ) {
        const sponsor = await Sponsor.findById(id)
        if(!sponsor) {
            return this.handler.error("Bad Request! Please try again.")
        }
        return this.handler.success(sponsor)
    }

    @Mutation(() => IResponse)
    async CreateSponsor(
        @Arg("input", () => ISponsor) input: ISponsor
    ) {
        delete input.__v
        delete input._id

        const sponsor = await Sponsor.create(input)
        if(!sponsor) {
            return this.handler.error("Bad Request! Please try again.")
        }
        return this.handler.success(sponsor)
    }

    @Query(() => [IResponse])
    async AllSponsors() {
        const sponsors = await Sponsor.find()
        if (!sponsors) {
            return this.handler.error("No sponsors found.")
        }
        return this.handler.success(sponsors)
    }
}