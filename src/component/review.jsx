import React from 'react';

const Review = () => {
  return (
    <>
      {/* Customer Reviews Section */}
      <section className="bg-white py-12 sm:py-16 px-4 sm:px-6 lg:px-12">
        {/* Section Title */}
        <div className="text-center mb-10 sm:mb-14">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-green-800 mb-2 leading-snug">
            எங்கள் வாடிக்கையாளர்கள் கூறுவது / What Our Clients Say
          </h2>
          <p className="text-gray-500 text-xs sm:text-sm">
            Real experiences from our happy patients
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="mb-8 sm:mb-12">
            <h2 className="text-lg sm:text-2xl font-semibold text-gray-800 mb-2">
              Customer Reviews & Ratings
            </h2>
            <div className="flex items-center gap-2 text-base sm:text-xl font-bold text-yellow-500">
              ★★★★☆
              <span className="text-gray-600 text-xs sm:text-sm font-normal">
                (4.7 out of 5)
              </span>
            </div>
            <p className="text-xs sm:text-sm text-gray-500 mb-4 sm:mb-6">
              Based on 2,418 reviews
            </p>

            {/* Star rating bars */}
            <div className="space-y-2">
              {[5, 4, 3, 2, 1].map((star, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 text-xs sm:text-sm text-gray-700"
                >
                  <span className="w-10 sm:w-12">{star} ★</span>
                  <div className="flex-1 h-2 bg-gray-200 rounded">
                    <div
                      className="h-2 bg-yellow-400 rounded"
                      style={{ width: `${[85, 25, 10, 5, 2][i]}%` }}
                    ></div>
                  </div>
                  <span className="w-8 sm:w-12 text-right">
                    {[230, 220, 5, 2, 3][i]}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Review List */}
          <div className="space-y-8 sm:space-y-10">
            {[
              {
                name: "அருண் குமார்",
                date: "ஜூலை 10, 2023",
                verified: true,
                stars: 5,
                text: "நான் பல வருடங்களாக முதுகு வலி கொண்டு தவித்தேன். இங்கு அகுபங்சர் சிகிச்சை பெற்ற பின் மிகுந்த நிம்மதி கிடைத்தது.",
              },
              {
                name: "மாலதி ராஜேஷ்",
                date: "ஆகஸ்ட் 2, 2023",
                verified: true,
                stars: 5,
                text: "சிகிச்சை மிகுந்த பயனுள்ளதாக இருந்தது. தூக்கமின்மை பிரச்சினையும் தீர்ந்தது. நன்றி!",
              },
              {
                name: "John Peter",
                date: "September 20, 2023",
                verified: true,
                stars: 5,
                text: "I had severe migraine issues for years. After the acupuncture sessions here, my pain reduced drastically. The doctors were very kind and professional.",
              },
              {
                name: "Priya Suresh",
                date: "October 12, 2023",
                verified: false,
                stars: 4,
                text: "Good experience overall. The clinic is clean and the staff is very friendly. I would recommend this to anyone looking for natural healing methods.",
              },
              {
                name: "சந்தோஷ் வெங்கடேஷ்",
                date: "ஆகஸ்ட் 15, 2023",
                verified: false,
                stars: 4,
                text: "சிகிச்சை முறைகள் சுத்தமாகவும் தொழில்நுட்ப ரீதியாகவும் இருந்தது. இன்னும் சில அமர்வுகள் எடுக்க விரும்புகிறேன்.",
              },
            ].map((review, i) => (
              <div key={i} className="border-b pb-4 sm:pb-6">
                <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-2">
                  <div className="text-sm sm:text-base font-medium text-gray-800">
                    {review.name}
                  </div>
                  <div className="text-xs text-gray-500">{review.date}</div>
                  {review.verified && (
                    <span className="ml-1 sm:ml-2 inline-flex items-center px-2 py-0.5 text-xs font-medium bg-green-100 text-green-800 rounded">
                      ✔ Verified
                    </span>
                  )}
                </div>
                <div className="text-yellow-400 mb-2 text-sm sm:text-base">
                  {"★".repeat(review.stars)}{"☆".repeat(5 - review.stars)}
                </div>
                <p className="text-gray-700 text-xs sm:text-sm md:text-base leading-relaxed">
                  {review.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Review;
