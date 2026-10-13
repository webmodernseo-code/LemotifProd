export interface BrandList {
  image: string
  lightimg?: string
  name: string
}

export interface BrandSliderProps {
  brandList?: BrandList[]
}

export const defaultBrandList: BrandList[] = [
  {
    image: "https://cdn.21st.dev/assets/localized/d824c259df6b2b2962fbef96e68a6877cab689b19246e3dc34ac9e7b144d32bd.svg",
    name: "Corporate & Dirigeants",
  },
  {
    image: "https://cdn.21st.dev/assets/localized/266083df0c7d0633f145889af4700d18e62b8f2c068fd8ab73d5a94b87a5a5cb.svg",
    name: "Mariages d'Exception",
  },
  {
    image: "https://cdn.21st.dev/assets/localized/91d1c562d12ba69aa7525d3782c6c6223b90e302073d59769dfce665ab9a83b7.svg",
    name: "Restaurants & Hôtellerie",
  },
  {
    image: "https://cdn.21st.dev/assets/localized/f50b06ae2b7bf86d199b0ac986a47442f4a198d2f6dd81a9fe83c43022608498.svg",
    name: "Festivals & Spectacles",
  },
  {
    image: "https://cdn.21st.dev/assets/localized/3ad67ddda671655df765a507c9bcc7b67e4138a1ffe903ace17cef99c5c972a3.svg",
    name: "Books & Créateurs",
  },
]

export default function BrandSlider({ brandList = defaultBrandList }: BrandSliderProps) {
  // Duplicate for infinite seamless scroll
  const duplicatedBrands = [...brandList, ...brandList, ...brandList, ...brandList]

  return (
    <div className="w-full py-12 bg-[#06070A] border-y border-[#1C1E26] overflow-hidden relative">
      {/* Gradient masks on edges */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#06070A] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#06070A] to-transparent z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 mb-5 text-center">
        <p className="text-xs uppercase tracking-[0.25em] text-gray-400 font-medium">
          Ils font confiance à l'œil et à la signature <span className="text-[#EFA31D] font-bold">LEMOTIF PROD</span>
        </p>
      </div>

      <div className="flex w-max animate-marquee space-x-12 items-center">
        {duplicatedBrands.map((brand, idx) => (
          <div
            key={idx}
            className="flex items-center gap-3 px-6 py-3 rounded-xl bg-[#0D0E12] border border-[#1E2028] hover:border-[#EFA31D]/40 transition-all duration-300 group shrink-0"
          >
            {brand.image && (
              <img
                src={brand.image}
                alt={brand.name}
                className="h-5 w-auto object-contain opacity-50 group-hover:opacity-100 transition-opacity invert"
              />
            )}
            <span className="text-xs font-semibold text-gray-400 group-hover:text-white transition-colors">
              {brand.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
