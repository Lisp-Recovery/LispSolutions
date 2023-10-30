import Image, { ImageLoaderProps } from "next/image";
import { Title } from "./Title";
import { FC } from "react";
import Link from "next/link";

interface ICollaboratorCard {
  photo: Photo;
  collaborator: Collaborator;
  buttonHref: string;
}

interface Photo extends ImageLoaderProps {
  src: string;
  alt: string;
  blurDataURL: string;
}

interface Collaborator {
  name: string;
  title: string;
  description: string;
}

export const CollaboratorCard: FC<ICollaboratorCard> = ({ photo, collaborator, buttonHref }) => {
  return (
    <div>
      <div className='flex flex-col items-center md:flex-row md:items-start'>
        <div className='w-1/2 min-w-[12rem]'>
          <div className='border-2 border-primary w-fit mx-auto'>
            <Image
              src={photo.src}
              alt={photo.alt}
              width={photo.width}
              height={photo.width}
              blurDataURL={photo.blurDataURL}
              placeholder="blur"
              priority
              quality={photo.quality}
            />
          </div>
        </div>
        <div className='md:ml-8 flex flex-col justify-center items-center md:items-start'>
          <Title style={{marginBottom: 0}} className="mt-2 md:mt-0 text-center">
            {collaborator.name}
          </Title>
          <span className='text-primary text-normal text-center'>{collaborator.title}</span>
          <p className='text-[#423E3E] text-normal font-medium text-ellipsis overflow-hidden line-clamp-4 md:line-clamp-5 mt-2 text-center md:text-justify'>
            {collaborator.description}
          </p>
          <Link href={buttonHref} target='_blank' className='text-primary hover:underline'>
            Saiba Mais
          </Link>
        </div>
      </div>
    </div>
  );
};