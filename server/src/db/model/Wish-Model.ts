import { AppDataSource } from '../data-source';
import { Wish } from '../entity/wish';
/**
 * Loads all posts from the database.
 */
export class WishModel {
  // 1. 찜 생성 - 사용자 찜 추가(return 값으로 찜한 전체 인원수 반환)
  async create(email: string, REGNumber: string) {
    await AppDataSource.createQueryBuilder()
      .insert()
      .into(Wish)
      .values({ REGNumber: REGNumber, email: email })
      .execute();
  }

  // 2-1. 사용자 이메일 기준 찜 목록 조회
  async findWishByEmail(email: string) {
    // async findWishByEmail(criteria:string, email: string) {
    console.log(email);
    const wishRepository = AppDataSource.getRepository(Wish);
    // get a post repository to perform operations with post
    // if (criteria === 'default') {
    const wishers = await wishRepository.find({
      where: { email: email },
      order: {
        createdAt: 'DESC',
      },
    });
    console.log(wishers);
    return wishers;
    // }
    // else {
    //   const wishers = await wishRepository.find({
    //     where: {email: email},
    //     order:{
    //       createdAt: "ASC"
    //     },
    //   });
    //   return (wishers);
    // }
  }

  // 2-2. 특정 상호 관련 찜한 손님 전체 조회 - 상호 기준
  async findWishByREGNumber(REGNumber: string) {
    const wishRepository = AppDataSource.getRepository(Wish);
    // get a post repository to perform operations with post
    const wishes = await wishRepository.find({
      where: { REGNumber: REGNumber },
    });
    return wishes;
  }

  // 3. 이메일, REGNumber 기준 찜 삭제(return 값으로 찜한 전체 인원수 반환)
  async deleteWish(email: string, REGNumber: string) {
    await AppDataSource.createQueryBuilder()
      .delete()
      .from(Wish)
      .where('email = :email', { email: email })
      .andWhere('REGNumber = :REGNumber', { REGNumber: REGNumber })
      .execute();
  }
}

const wishModel = new WishModel();
export { wishModel };
