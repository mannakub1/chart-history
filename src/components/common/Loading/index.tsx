import { LoadingProps } from "./type";
import { LoadingIcon, LoadingLayout, visible, SpinnerHidden } from "./style";

const Loading = (props: LoadingProps) => {
  const { loading, className } = props;
  return (
    <>
      {loading ? (
        <LoadingLayout className={className}>
          <LoadingIcon
            className={`loading-spinner ${loading ? visible : SpinnerHidden}`}
            loading={loading.toString()}
          />
        </LoadingLayout>
      ) : null}
    </>
  );
};

export default Loading;
