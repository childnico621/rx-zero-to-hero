import { IGitHubUser } from "./IGitHubUser";

export interface IGitHubResult<T> {
    total_count:        number;
    incomplete_results: boolean;
    items:              T[];
}

