import { AssetVersionLink } from "./asset-version-link";

// TODO: work out the proper enum values
export enum JoinabilityStatus {
    Unknown = 0,
    Open = 1,
    Closed = 2,
    InviteOnly = 3,
}

// TODO: work out the proper enum values
export enum FireteamActivity {
    Unknown0 = 0,
    Unknown1 = 1,
    Unknown2 = 2,
    Unknown3 = 3,
    Unknown4 = 4,
    Unknown5 = 5,
}

// TODO: work out the proper enum values
export enum FireteamLeaderMenuActivity {
    None = 0,
    InMenu = 1,
}

export interface FireteamDetails {
    FireteamId: string;
    PlayerCount: number;
    MaxPlayers: number;
    JoinabilityStatus: JoinabilityStatus;
    PlaylistRef: AssetVersionLink | null; // AssetKind = 3
    Activity: FireteamActivity;
    FireteamLeaderMenuActivity: FireteamLeaderMenuActivity;
}

export interface MatchDetails {
    MatchId: string;
    MapRef: AssetVersionLink; // AssetKind = 2
    GameVariantRef: AssetVersionLink; // AssetKind = 6
    MatchStartTime: {
        ISO8601Date: string;
    }
}

export type LobbyPresence<TResult extends 1 | 0 = 0> = TResult extends 0 ? {
    FireTeamDetails: FireteamDetails;
    MatchDetails: MatchDetails | null;
} : {
    FireteamDetails: null;
    MatchDetails: null;
};
