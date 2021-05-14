import React from 'react';
import { IIconProps } from '../Icon'

export default ({ size, fill }: IIconProps) => (
  <svg width={size || 24} height={size || 24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M19.5 9C19.2016 9 18.9155 8.88147 18.7045 8.6705C18.4935 8.45952 18.375 8.17337 18.375 7.875C18.375 7.27826 18.1379 6.70597 17.716 6.28401C17.294 5.86205 16.7217 5.625 16.125 5.625C15.8266 5.625 15.5405 5.50647 15.3295 5.2955C15.1185 5.08452 15 4.79837 15 4.5C15 4.20163 15.1185 3.91548 15.3295 3.7045C15.5405 3.49353 15.8266 3.375 16.125 3.375C16.7217 3.375 17.294 3.13795 17.716 2.71599C18.1379 2.29403 18.375 1.72174 18.375 1.125C18.375 0.826631 18.4935 0.540483 18.7045 0.329505C18.9155 0.118526 19.2016 0 19.5 0C19.7984 0 20.0845 0.118526 20.2955 0.329505C20.5065 0.540483 20.625 0.826631 20.625 1.125C20.625 1.72174 20.8621 2.29403 21.284 2.71599C21.706 3.13795 22.2783 3.375 22.875 3.375C23.1734 3.375 23.4595 3.49353 23.6705 3.7045C23.8815 3.91548 24 4.20163 24 4.5C24 4.79837 23.8815 5.08452 23.6705 5.2955C23.4595 5.50647 23.1734 5.625 22.875 5.625C22.2783 5.625 21.706 5.86205 21.284 6.28401C20.8621 6.70597 20.625 7.27826 20.625 7.875C20.625 8.17337 20.5065 8.45952 20.2955 8.6705C20.0845 8.88147 19.7984 9 19.5 9Z" fill={fill || "#FFBC00"}/>
    <path d="M9 24C8.60218 24 8.22064 23.842 7.93934 23.5607C7.65804 23.2794 7.5 22.8978 7.5 22.5C7.5 20.9087 6.86786 19.3826 5.74264 18.2574C4.61742 17.1321 3.0913 16.5 1.5 16.5C1.10218 16.5 0.720644 16.342 0.43934 16.0607C0.158035 15.7794 0 15.3978 0 15C0 14.6022 0.158035 14.2206 0.43934 13.9393C0.720644 13.658 1.10218 13.5 1.5 13.5C3.0913 13.5 4.61742 12.8679 5.74264 11.7426C6.86786 10.6174 7.5 9.0913 7.5 7.5C7.5 7.10218 7.65804 6.72064 7.93934 6.43934C8.22064 6.15804 8.60218 6 9 6C9.39782 6 9.77936 6.15804 10.0607 6.43934C10.342 6.72064 10.5 7.10218 10.5 7.5C10.5 9.0913 11.1321 10.6174 12.2574 11.7426C13.3826 12.8679 14.9087 13.5 16.5 13.5C16.8978 13.5 17.2794 13.658 17.5607 13.9393C17.842 14.2206 18 14.6022 18 15C18 15.3978 17.842 15.7794 17.5607 16.0607C17.2794 16.342 16.8978 16.5 16.5 16.5C14.9087 16.5 13.3826 17.1321 12.2574 18.2574C11.1321 19.3826 10.5 20.9087 10.5 22.5C10.5 22.8978 10.342 23.2794 10.0607 23.5607C9.77936 23.842 9.39782 24 9 24Z" fill={fill || "#FFBC00"}/>
  </svg>

)
