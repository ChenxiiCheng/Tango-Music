import styles from './index.module.scss';
import { resultType } from '../../pages/index';

interface IProps {
  data: resultType;
  key: number;
}

const RecommendCard = ({ data }: IProps) => {
  return (
    <div className={styles.card}>
      <div className={styles.card_header}>
        <img src={data.picUrl} alt="albumn" />
      </div>
      <div className={styles.card_content}>
        <h4>{data.name}</h4>
      </div>
    </div>
  );
};

export default RecommendCard;
