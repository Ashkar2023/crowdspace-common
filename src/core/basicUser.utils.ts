import { IBasicUser } from "~types/common.types.js";

export const parseUniqueIds = (objArr: Record<string, any>[], field: string) => {
    const userIdSet = new Set<string>();
    objArr.forEach(p => userIdSet.add(p[field].toString()));

    return userIdSet;
}

export const createUserBasicDict = (profiles: IBasicUser[], delete_id: boolean = true) => {
    const dict = Object.create(null);

    profiles.forEach((profile) => {
        dict[profile._id] = profile; //assign profile to Dict with _id as key & profile as value
        delete_id && delete dict[profile._id]._id; //remove id from Dict
    });

    return dict;
}

// the resource is supposed to be a mongoose document
export const injectProfiles = (resource: Record<string, any>[], dict: Record<string, IBasicUser>[], fieldToPopulate: string,) => {

    const resourceWithProfiles = resource.map((r) => {

        const cleanResource = r.toObject(); // toObject on mongoose doc
        cleanResource[fieldToPopulate] = dict[r[fieldToPopulate].toString()];

        return cleanResource;
    })

    return resourceWithProfiles
}