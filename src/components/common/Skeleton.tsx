import { FC } from 'react';
import 'react-loading-skeleton/dist/skeleton.css';
import ReactSkeleton, { SkeletonProps } from 'react-loading-skeleton';

const Skeleton: FC<SkeletonProps> = props => <ReactSkeleton {...props} />;

export default Skeleton;
