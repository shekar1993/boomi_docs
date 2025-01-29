import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import QuerySummary from "../QuerySummary";
import FacetList from "../FacetList";
import Sort from "../Sort";
import ResultList from "../ResultList";
import Pager from "../Pager";
import ResultsPerPage from "../ResultsPerPage";

const SearchResultsPage = () => {
  return (
    <div
      className="search-results-page-wrapper"
      data-testid="search-results-page-wrapper"
    >
      <Container maxWidth="lg" style={{ paddingTop: "20px" }}>
        <Box my={4}>
          <Grid container>
            <Grid item md={3} sm={12} xs={12}>
              <FacetList />
            </Grid>
            <Grid item md={9} sm={12} xs={12}>
              <Box pl={3}>
                <Grid
                  container
                  alignItems="flex-end"
                  className="query-sort-container"
                >
                  <Grid item md={10} sm={10} xs={12}>
                    <QuerySummary />
                  </Grid>
                  <Grid item md={2} sm={2} xs={2}>
                    <Sort />
                  </Grid>
                </Grid>
                <ResultList />
              </Box>
              <Box my={4} mx={4}>
                <Grid container>
                  <Grid item md={6} sm={7} xs={12} my={1}>
                    <Pager />
                  </Grid>
                  <Grid item md={6} sm={5} xs={12} my={1}>
                    <ResultsPerPage />
                  </Grid>
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  );
};

export default SearchResultsPage;
