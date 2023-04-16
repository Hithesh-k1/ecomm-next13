import { Oval } from 'react-loader-spinner';

export default function LoadingPage() {
  return (
    <div className="spinner">
      <Oval
        height={80}
        width={80}
        color="#4fa94d"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="oval-loading"
        secondaryColor="#4fa94d"
        strokeWidth={2}
        strokeWidthSecondary={2}
      />
      <style jsx>{`
        .spinner {
          display: flex;
          justify-content: center;
          margin-top: 3em;
        }
      `}</style>
    </div>
  );
}
