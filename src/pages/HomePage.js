import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { listProducts } from "../actions/productAction";
import Loader from "../components/ui/Loader";
import Paginate from "../components/ui/Paginate";
import Message from "../components/ui/Message";

const HomePage = () => {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading, error, products, pages, page } = productList;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <>
      <Typography variant="h1">Latest Products</Typography>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message severity="error">{error}</Message>
      ) : (
        <>
          <Grid container spacing={3} sx={{ mb: "1rem" }}>
            {products.map((product, i) => (
              <Typography variant="body1" key={product.id}>
                {product.title}
              </Typography>
            ))}
          </Grid>
          <Paginate pages={pages} page={page} history={history} />
        </>
      )}
    </>
  );
};

export default HomePage;
