import SVG, { SVGProps } from 'components/primitives/SVG';
import React from 'react';

const GitHub: React.FC<GitHubProps> = ({ fill, ...rest }) => {
  return (
    <SVG fill={fill} viewBox="0 0 512 512" {...rest}>
      <path d="M343.718 509.152c-2.493.922-5.001 2.036-7.567 2.497-9.829 1.799-16.12-3.404-16.178-13.705-.13-19.132-.13-38.233.174-57.365.319-22-.174-43.718-16.512-61.869 9.713-1.783 18.353-3.032 26.804-5.024 55.986-13.185 85.067-49.397 88.778-109.497 1.899-30.592-3.421-58.657-23.253-82.754-1.435-1.694-1.507-5.544-.826-8.012 5.277-19.92 3.74-39.378-2.406-58.851-1.523-4.861-4.045-6.362-8.727-6.05-16.44.936-31.502 6.853-44.78 15.95-12.801 8.815-24.718 10.733-39.925 7.165-33.487-7.745-67.192-5.485-100.607 2.453-3.783.921-8.872-.312-12.336-2.393-15.686-9.425-31.371-18.582-49.463-22.239-13.99-2.794-15.207-2.08-18.918 11.788-4.668 17.482-5.132 34.978-.363 52.563.682 2.557-.029 6.66-1.696 8.548-37.068 42.41-23.644 122.548 1.334 153.245 19.425 23.843 45.23 34.576 73.875 40.15 5.001.952 9.974 1.68 14.975 2.572-4.29 11.446-8.147 22.253-12.51 32.882-.856 2.051-3.567 3.775-5.785 4.638-28.094 11.178-52.246 2.958-68.323-23.19-8.596-13.944-19.628-24.364-36.067-27.382-.522-.104-1.059-.386-1.537-.312-4.421 1.19-8.8 2.438-13.206 3.657 2.478 3.538 4.233 8.295 7.552 10.42 13.932 9.038 22.992 21.927 28.98 37.134 9.408 23.843 27.673 34.472 51.404 36.553 11.583.966 23.282.149 35.967.149 0 14.805.522 31.707-.218 48.534-.377 9.068-9.263 12.695-19.904 8.979-28.225-9.9-54.391-24.097-76.992-44.046C13.861 394.26-17.598 303.136 9.526 196.48 36.562 90.163 107.031 24.95 212.393 4.48c145.793-28.274 283.903 80.598 298.37 232.357 11.424 119.634-57.247 231.583-167.045 272.314zM206.275 377.759c-.087.208-.145.357-.232.565.261.045.522.09.797.134.203.015.377.386-.565-.699zm-65.96 47.286c2.276 1.442 4.45 3.27 6.915 4.058.899.298 2.566-1.798 5.509-4.028-4.088-1.59-6.495-2.988-9.032-3.345-.985-.119-2.261 2.156-3.392 3.315zm20.774 3.657c.333 1.56 3.363 3.508 5.146 3.478 1.725-.03 3.407-2.378 5.132-3.716-1.566-1.472-3.131-2.899-7.944-7.343-1.044 3.092-2.769 5.589-2.334 7.58zm25.485-6.288c-2.145.52-3.957 2.557-5.915 3.954 1.146 1.487 2.29 2.869 4.132 5.203 2.537-2.379 4.262-4.029 6.002-5.634-1.45-1.293-3.146-3.79-4.219-3.523zm-63.176-8.815c1.188 2.304 3.03 4.296 5.523 7.551 1.667-2.794 3.479-4.935 3.16-5.366-1.58-2.126-3.726-3.865-5.842-5.455-.145-.12-3.088 2.764-2.841 3.27z" />
    </SVG>
  );
};

GitHub.displayName = 'GitHub';

export type GitHubProps = SVGProps;
export default GitHub;
