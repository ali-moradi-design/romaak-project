import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../actions/productAction";
import Loader from "../components/ui/Loader";
import Message from "../components/ui/Message";
import { Box, Container, Grid, Pagination } from "@mui/material";

const s = {
  product: {
    display: "block",
    fontSize: "4rem"
  },
  tableContainerMain: {
    mt: "5rem",
    borderRadius: "1rem",
    boxShadow: "inset 0px 3px 6px rgba(0,0,0,0.16),0px 3px 6px rgba(0,0,0,0.16)",
    mb: "4rem"
  },
  table: {
    borderCollapse: "collapse",
    background: "#fff",
    overflow: "hidden",
    width: " 100%",
    m: "0 auto",
    position: "relative"
  },
  tableHead: {
    backgroundColor: "primary.main",
    color: "#fff",
    p: "1rem"
  },
  cell: {
    fontSize: {
      xs: "1rem",
      sm: "1.2rem",
      md: "1.4rem",
      lg: "1.6rem"
    },
    p: "0.8rem",
    border: "1px solid #ddd",
    textAlign: "center"
  },

  tr: {
    "&:nth-of-type(even)": {
      background: "#f2f2f2"
    },
    "&:hover": {
      background: "#ddd"
    }
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

const HomePage = () => {
  const [total, setTotal] = useState(10);
  const [page, setPage] = useState(1);

  const handleChangePagination = (event, value) => {
    setPage(Number(value));
  };

  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading, error, products, totalPage } = productList;

  const lastPage = Math.ceil(total / perPage);

  const tableHeadItems = [
    { id: 1, name: "id" },
    { id: 2, name: "title" },
    { id: 4, name: "description" },
    { id: 5, name: "price" },
    { id: 6, name: "discountPercentage" },
    { id: 7, name: "rating" },
    { id: 8, name: "stock" },
    { id: 9, name: "brand" },
    { id: 10, name: "category" }
  ];

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
                    <Box component="table" sx={s.table}>
                      <Box component="thead" sx={s.tableHead}>
                        <Box component="tr">
                          {tableHeadItems.map((el) => (
                            <Box key={el.id} component="th" sx={s.cell}>
                              {el.name}
                            </Box>
                          ))}
                        </Box>
                      </Box>
                      <Box component="tbody">
                        {products.map(
                          ({
                            id,
                            title,
                            description,
                            price,
                            discountPercentage,
                            rating,
                            stock,
                            brand,
                            category
                          }) => (
                            <Box component="tr" key={id} sx={s.tr}>
                              <Box component="td" sx={s.cell}>
                                {id}
                              </Box>

                              <Box component="td" sx={s.cell}>
                                {title}
                              </Box>
                              <Box component="td" sx={s.cell}>
                                {description}
                              </Box>
                              <Box component="td" sx={s.cell}>
                                {price}
                              </Box>
                              <Box component="td" sx={s.cell}>
                                {discountPercentage}
                              </Box>
                              <Box component="td" sx={s.cell}>
                                {rating}
                              </Box>
                              <Box component="td" sx={s.cell}>
                                {stock}
                              </Box>
                              <Box component="td" sx={s.cell}>
                                {brand}
                              </Box>
                              <Box component="td" sx={s.cell}>
                                {category}
                              </Box>
                            </Box>
                          )
                        )}
                      </Box>
                    </Box>
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

export default HomePage;
