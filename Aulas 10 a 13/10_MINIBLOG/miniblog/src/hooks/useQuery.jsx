// This hook is used to get the query parameters from the URL.
// It uses the useLocation hook from react-router-dom to get the current location
// and then uses the URLSearchParams API to parse the query parameters.
import { useLocation } from "react-router-dom";

// hooks
import { useMemo } from "react";

export function useQuery() {
	// Get the search string from the current location
	const { search } = useLocation();

	// Use useMemo to memoize the result of parsing the search string.
	// This will only recompute the result when the search string changes.
	return useMemo(() => new URLSearchParams(search), [search]);
}
