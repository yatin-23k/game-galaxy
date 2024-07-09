import useWishlist from  "../hooks/useWishlist"

const WishlistPage = () => {
  const wishlist = useWishlist();
  console.log(wishlist.data);
  return <div>WishlistPage</div>;
};

export default WishlistPage;