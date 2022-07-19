import ShopListCard from '../../molecules/Card/SearchShopList';
import * as UI from './style';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import LikeBtn from '../../atoms/LikeButton/LikeBtn';
import * as API from '../../../api/api';
import Pagination from '../../atoms/Pagination/Pagination';
import Paging from '../../atoms/Pagination/Pagination';

const SearchShopList = ({ inputValue, categorySelect }: any) => {
  const [wishes, setWishes] = useState([]);
  const [userEmail, setUserEmail] = useState('');
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(12);
  const [total, setTotal] = useState(10);

  const [shop, setShop] = useState([
    {
      name: '',
      address1: '',
      category: '',
      image: '',
      REGNumber: '',
      wishers: 0,
    },
  ]);

  const getWished = async () => {
    const email = await API.userGet('/api/users/user').then((res) => {
      setUserEmail(res.email);
      return res.email;
    });
    await API.get(`/api/wishes/${email}`).then((res) => setWishes(res));
  };

  useEffect(() => {
    getWished();
  }, []);

  useEffect(() => {
    if (inputValue === '' || categorySelect === '') {
      API.get(`/api/restaurants/?page=${page}&perpage=10`).then((res) => {
        setShop(res.restaurants);
        setPerPage(res.perPage);
        setTotal(res.total);
      });
    } else {
      API.get('/api/restaurants').then((res) => {
        const data = res.restaurants;
        const filtered = data.filter(
          (e: any) =>
            e.name.includes(inputValue) ||
            e.category.includes(inputValue) ||
            e.category.includes(categorySelect),
        );
        setShop(filtered);
      });
    }
  }, [inputValue, categorySelect, page]);

  return (
    <UI.Container>
      <UI.Title>검색결과</UI.Title>
      <UI.GridContainer>
        {shop.map((item, idx) => {
          const isWished = wishes
            .map((e: any) => e.REGNumber)
            .includes(item.REGNumber);
          return (
            <div
              key={`${item}-${idx}`}
              style={{ position: 'relative', width: 370 }}
            >
              <LikeBtn
                regNumber={item.REGNumber}
                email={userEmail}
                isWished={isWished}
              />
              <Link to={`/account/restaurants/${item.REGNumber}`}>
                <ShopListCard
                  regNumber={item.REGNumber}
                  title={item.name}
                  address={item.address1}
                  category={item.category}
                  likeCount={item.wishers}
                  reviewCount={10}
                  shopImg={item.image}
                  large={true}
                />
              </Link>
            </div>
          );
        })}
      </UI.GridContainer>
      <Paging page={page} setPage={setPage} total={total} perPage={perPage} />
    </UI.Container>
  );
};

export default SearchShopList;
