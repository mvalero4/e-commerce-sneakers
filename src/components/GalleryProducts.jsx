import { SlideProduct } from "./SlideProduct";

export const GalleryProducts = ({ ARRAY_IMGS, ARRAY_IMGS_SMALL}) => {
    
    return (
        <>
            <SlideProduct 
                ARRAY_IMGS={ARRAY_IMGS} 
                ARRAY_IMGS_SMALL={ARRAY_IMGS_SMALL}
                className="grid md:grid-cols-4 md:gap-4"
            />
        </>
    );
};