import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../actions/productAction";
import Loader from "../components/ui/Loader";
import Message from "../components/ui/Message";
import EnhancedTable from "../components/EnhancedTable/EnhancedTable";
import { Box, Container, Grid, Pagination } from "@mui/material";

const s = {
  tableMain: {
    width: "100%"
  },

  tableContainerMain: {
    mt: "5rem",
    borderRadius: "1rem",
    boxShadow: "inset 0px 3px 6px rgba(0,0,0,0.16),0px 3px 6px rgba(0,0,0,0.16)",
    mb: "4rem"
  },

  pagination: {
    mb: "8rem",
    "&.MuiPagination-root": {
      "& li": {
        mx: ".1rem"
      },
      "& li:first-of-type .MuiPaginationItem-root": {
        background: "transparent",
        color: "",
        "& svg": {
          fontSize: "2.7rem"
        }
      },
      "& li:last-of-type .MuiPaginationItem-root": {
        background: "transparent",
        color: "primary.main",
        "& svg": {
          fontSize: "2.7rem"
        }
      },

      "& .MuiPaginationItem-root": {
        background: "primary.main",
        color: "#C1C2C5",
        borderRadius: "1rem",
        p: { xs: 0, sm: "0 6px" },
        height: { xs: "2.5rem", sm: "32px" },
        minWidth: { xs: "2.5rem", sm: "32px" },

        fontSize: {
          xs: "1.2rem",
          sm: "1.4rem",
          md: "1.6rem"
        },
        ":hover": {
          background: "primary.main"
        }
      },

      "& .MuiPaginationItem-root.Mui-selected": {
        background: "#FFBB00",
        color: "primary.main"
      }
    }
  }
};

const perPage = 10;

const MuiTable = () => {
  const [total, setTotal] = useState(10);
  const [page, setPage] = useState(1);

  const handleChangePagination = (event, value) => {
    setPage(Number(value));
  };

  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading, error, products, totalPage } = productList;

  const lastPage = Math.ceil(total / perPage);

  useEffect(() => {
    dispatch(listProducts(perPage, perPage * (page - 1)));
  }, [dispatch, page]);

  useEffect(() => {
    setTotal(totalPage);
  }, [totalPage]);

  return (
    <Box
      sx={{
        minHeight: "100vh"
      }}>
      <Container>
        {loading ? (
          <Grid
            container
            sx={{
              mt: "10rem",
              justifyContent: "center"
            }}>
            <Grid item>
              <Loader />
            </Grid>
          </Grid>
        ) : error ? (
          <Message severity="error">{error}</Message>
        ) : (
          <>
            <Grid container justifyContent="center">
              <Grid item xs={12} sx={s.tableContainerMain}>
                <Grid container justifyContent="center">
                  <Box
                    sx={{
                      width: "100%",
                      overflowX: "auto"
                    }}>
                    <Grid container direction="column" sx={s.tableMain}>
                      <EnhancedTable products={products ? products : []} />
                    </Grid>
                  </Box>
                </Grid>
              </Grid>
            </Grid>
            <Grid container justifyContent="center">
              <Pagination
                page={page}
                count={lastPage}
                onChange={handleChangePagination}
                sx={s.pagination}
              />
            </Grid>
          </>
        )}
      </Container>
    </Box>
  );
};

export default MuiTable;
