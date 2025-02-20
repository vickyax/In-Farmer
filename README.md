## Inspiration

![heroimage](projectImages/hero2.jpg)
The idea for In-Farmer came from my passion for solving real-world problems with technology. I was particularly drawn to agriculture, a vital yet underserved sector, where I saw farmers struggling to find direct buyers and relying on middlemen who cut into their profits. Buyers, too, faced challenges in sourcing fresh produce directly at fair prices.

I began asking key questions: Why can’t digital platforms connect farmers directly to buyers? How can we make agricultural transactions more efficient, fair, and transparent? What technologies could streamline this process?

I envisioned an online marketplace where farmers could list products, set prices, and negotiate directly with buyers, eliminating middlemen. This would give farmers better control over their earnings while providing buyers with fresh, affordable produce.

With my background in web development, AI/ML, and automation, I felt equipped to bring this vision to life. I started planning the platform, outlining features, and selecting the right technologies to make it a reality.

## What it does
The app allows farmers to list their products, negotiate prices, and manage sales
efficiently. Buyers can browse available products, make purchases, and arrange
logistics. The ultimate goal was to create an ecosystem where everyone benefits,
farmers gain access to a larger market, and buyers get fresh produce directly from
the source.

**Home Page**

![home](projectImages/Screenshot%20(780).png?raw=true)

**Product Listing Page Or Sellers page**

Allows farmers to list their products with forms for
input.
![seller page](projectImages/Screenshot%20(784).png?raw=true)

**Buyers page**
![buyers](projectImages/Screenshot%20(783).png?raw=true)

**User Experience**

The app is designed to be intuitive, with a focus on ease of
navigation. Users can quickly find products, manage their accounts, and complete
transactions with minimal friction.

**Multi language Functionality**

The app use Svelte’s i18 translation module to
ensure individuals can access the app in their own native language.

![multi language](projectImages/Screenshot%20(787).png?raw=true)

**Stock Prices of Commodities**

shows the up to date price information of agricultural commodities sold in markets using the government provided agricultural api, which helps in farmers deciding on the best price to sell their harvest.

![multi language](projectImages/Screenshot%20(787).png?raw=true)

# How we built it


To bring **In-Farmer** to life, I developed it as a full-stack application, leveraging a combination of modern technologies to ensure scalability, performance, and an exceptional user experience. Here's a breakdown of the tech stack and tools used:

## Frontend Development
![Home](projectImages/Screenshot%20(780).png?raw=true)


- **Framework**

 <img src="https://raw.githubusercontent.com/sveltejs/branding/master/svelte-logo.svg" alt="JavaScript Icon" width="32" style="vertical-align: middle;">Svelte and SvelteKit 
  
  Svelte was chosen for its lightweight and reactive nature, enabling the creation of a fast and responsive user interface. SvelteKit provided the necessary routing and server-side rendering capabilities for a seamless user experience.
  
- **Languages** 

<img src="https://raw.githubusercontent.com/vscode-icons/vscode-icons/master/icons/file_type_js.svg" alt="JavaScript Icon" width="32" style="vertical-align: middle;"/> & <img src="https://raw.githubusercontent.com/vscode-icons/vscode-icons/master/icons/file_type_typescript.svg" alt="TypeScript Icon" width="32" style="vertical-align: middle;"/>    
  JavaScript was used for core functionality, while TypeScript added type safety, improving code reliability and maintainability.

- **Styling** 

<img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" alt="Tailwind CSS Icon" width="32" style="vertical-align: middle;"/>   
 Tailwind CSS allowed for rapid and consistent UI development with its utility-first approach, ensuring a clean and modern design.

## Backend Development
#### Database & Backend Services

- **Firebase**

  ![Firebase Icon](https://raw.githubusercontent.com/firebase/firebase-chrome-extension/master/icons/icon48.png)  
![firebase](projectImages/Screenshot%20(791).png?raw=true)
  Firebase was the backbone of the backend, offering real-time database capabilities, authentication, and seamless integration with the frontend. It enabled features like user authentication, product listings, and transaction management.

- **APIs**: REST APIs  
 
  RESTful APIs were implemented to handle communication between the frontend and backend, ensuring smooth data flow and functionality.

- **Government Agricultural API**:
- 
  Integrated a government agricultural API to fetch real-time market prices for products, ensuring farmers and buyers have access to accurate and up-to-date pricing information.
![api response](main/projectImages/Screenshot%20(792).png?raw=true)

## Hosting & Deployment
- **Platform**: Netlify  
  
  Netlify was chosen for hosting due to its simplicity, scalability, and support for continuous deployment. It allowed for automatic updates and ensured the platform was always running the latest version.
![netlify2](projectImages/Screenshot%20(788).png?raw=true)

<!--## Key Features of the Prototype-->
<!-- **User Authentication**: Secure login and registration for farmers and buyers.  -->
<!--   ![Authentication Icon](https://raw.githubusercontent.com/vscode-icons/vscode-icons/master/icons/file_type_lock.svg)-->

<!-- **Product Listings**: Farmers can list their products with details like price, quantity, and quality.  -->
<!--   ![Product Icon](https://raw.githubusercontent.com/vscode-icons/vscode-icons/master/icons/file_type_list.svg)-->

<!-- **Real-Time Market Prices**: Integration with government APIs to provide accurate pricing data.  -->
<!--   ![Market Price Icon](https://raw.githubusercontent.com/vscode-icons/vscode-icons/master/icons/file_type_chart.svg)-->

<!-- **Direct Negotiation**: A messaging system for farmers and buyers to negotiate directly.  -->
<!--   ![Chat Icon](https://raw.githubusercontent.com/vscode-icons/vscode-icons/master/icons/file_type_chat.svg)-->

<!-- **Transaction Management**: A streamlined process for managing orders and payments.  -->
<!--   ![Transaction Icon](https://raw.githubusercontent.com/vscode-icons/vscode-icons/master/icons/file_type_money.svg)-->

<!--By combining these technologies, I was able to create a robust, user-friendly platform that bridges the gap between farmers and buyers, empowering both parties with transparency and efficiency.-->

# Challenges We Faced While Building In-Farmer

The process of creating In-Farmer was both thrilling and demanding. Along the way, we faced several obstacles, but through persistence and problem-solving, we found effective solutions.



### Designing a Negotiation System  
 
One of the core features of In-Farmer is enabling buyers to negotiate prices directly with farmers. Implementing this required a system that could:  
- Allow buyers to make offers.  
- Notify farmers of new offers.  
- Let farmers accept, reject, or counteroffer.  
- Track the status of each negotiation in real time.  

We designed a Negotiations Table in the database with fields for status updates such as `pending`, `accepted`, `rejected` and timestamps to track negotiation progress effectively. This ensured transparency and efficiency in the negotiation process.


### Ensuring Real-Time Updates  
 
Buyers and farmers needed real-time updates on product availability, negotiation statuses, and transactions. However, Firebase’s Firestore posed challenges, especially with pricing and scalability for real-time updates.  
 
We optimized Firebase queries to minimize unnecessary reads/writes and used `onSnapshot()` to fetch only relevant updates. This reduced costs and improved performance.


### Handling Multi-Language Support  

To make the platform accessible to farmers and buyers speaking different languages, we needed a robust multi-language support system. Managing translations dynamically was a significant hurdle.  
 
We integrated Svelte’s i18n translation module, allowing users to switch languages seamlessly. This made the app user-friendly and inclusive, regardless of language barriers.


### User Authentication & Role-Based Access Control  
 
Farmers and buyers required different functionalities (e.g., farmers listing products, buyers making purchases). Implementing secure authentication while ensuring proper role-based access control was critical.  

We used Firebase Authentication and implemented role-based logic to separate functionalities. This ensured that farmers and buyers could only access features relevant to their roles.


### Image Upload & Storage for Product Listings  

Farmers needed to upload images of their products, but handling image uploads efficiently without bloating the database was a challenge.  

We used Firebase Storage to handle image uploads separately, storing only the image URLs in the database. This improved performance and reduced database load.

### Deployment & Hosting Issues  

While hosting the app on Netlify was straightforward, we faced issues with environment variables and Firebase configurations during deployment.  

We securely stored all API keys and Firebase credentials in Netlify environment variables and updated our deployment scripts to ensure smooth and secure deployments.



### Managing Mobile Responsiveness  

Many farmers access the platform on low-end mobile devices, so we needed to ensure the app was lightweight and responsive across all screen sizes.  

We used Tailwind CSS for responsive design and optimized images for faster loading. This ensured a smooth experience even on low-end devices.


### Scaling Considerations  

As the user base grows, handling large amounts of data, multiple transactions, and real-time updates could become a bottleneck.  

We designed the backend with scalability in mind, optimizing Firebase queries and minimizing unnecessary reads/writes. This ensures the platform can handle growth without compromising performance.


## Accomplishments that we're proud of

Building In-Farmer was a challenging yet rewarding journey. Along the way, we achieved several key milestones that made the project a success. Here are the accomplishments we’re most proud of:
Bridging the Gap Between Farmers & Buyers

We created a direct marketplace where farmers can list their products and buyers can purchase without intermediaries. This ensures farmers get fairer prices while buyers access fresh, affordable produce straight from the source.

To achieve this, we built a simple, intuitive platform for farmers to list products, negotiate prices, and complete sales effortlessly. By eliminating middlemen, we empowered farmers to take control of their earnings.

**Dynamic Price Negotiation System**

Unlike traditional e-commerce platforms, In-Farmer allows buyers to negotiate prices with farmers, offering flexibility and control over transactions.

We designed a real-time negotiation system where buyers can make offers, and farmers can accept, reject, or counter-offer through a structured process. A status tracking system was also implemented to manage ongoing negotiations effectively. This feature sets In-Farmer apart, making it more interactive and user-centric.

**Multi-Language Support for Accessibility**

Many farmers are not fluent in English, so multi-language support ensures the platform is accessible to a wider audience.

We integrated Svelte’s i18n translation module to allow users to switch languages effortlessly. This made the app inclusive for farmers from diverse linguistic backgrounds.

**Seamless Firebase Integration for Real-Time Updates**

Agricultural transactions require real-time updates for product availability, negotiation responses, and sales confirmations.

We used Firebase Firestore for live product updates and optimized onSnapshot() queries to fetch only relevant data, reducing unnecessary database reads. Additionally, Firebase Authentication was integrated for secure user logins. This resulted in a fast, responsive, and scalable platform.

**Optimized Mobile Experience for Farmers**

Many farmers access the internet primarily through mobile devices, so a smooth mobile experience was crucial.

We designed a mobile-first UI using Tailwind CSS for responsiveness and compressed images for faster loading speeds on low-bandwidth networks. Forms and navigation were simplified for ease of use, making the app lightweight, fast, and user-friendly for farmers.

**Smooth Deployment & Hosting on Netlify**

A project is only successful if it’s accessible to users. Efficient deployment and hosting were key to making In-Farmer publicly available.

We hosted the app on Netlify for continuous deployment with GitHub integration and used Netlify environment variables for secure API key management. Smooth CI/CD workflows were ensured so the app automatically updates with every push, resulting in a fast, reliable, and easily maintainable deployment process.

**Open-Sourcing the Project on GitHub**

By making the code open-source, we encourage collaboration and allow others to contribute, learn, and improve the platform.

We published the GitHub repository:  [GitHub - In-Farmer](https://github.com/vickyax/In-Farmer) and documented the project with a detailed README to help developers understand and contribute. This makes In-Farmer not just a standalone project but a collaborative effort for future growth.

These accomplishments reflect our commitment to creating a platform that empowers farmers, connects communities, and leverages technology for real-world impact.

## What we learned
 

#### Practical Full-Stack Development  
We deepened our understanding of Svelte, TypeScript, Firebase, and REST APIs, improving our ability to build scalable, interactive web applications.  

#### Optimizing UI/UX for Accessibility  
Ensuring the platform was intuitive and easy to navigate taught us the importance of user-friendly interfaces, responsive design, and accessibility for a diverse audience.  

#### Problem-Solving & Debugging  
From fixing database structuring issues to handling real-time updates, we enhanced our ability to troubleshoot effectively and write cleaner, maintainable code.  


#### Communication & Collaboration  
Working on this project reinforced the importance of clear communication, version control (Git), and efficient project management to keep development on track.  

Ultimately, building **In-Farmer** was a rewarding experience that strengthened both our technical expertise and problem-solving skills.  

## What's next for In-Farmer

With the foundation of In-Farmer firmly established, we’re thrilled to dive into new features and enhancements that will elevate the platform and create even more value for farmers and buyers.


#### Location-Based Recommendations

    Introducing geolocation-based filtering to connect buyers with farmers in their vicinity, cutting down on transportation costs and speeding up delivery times.
    

#### Real-Time Chat for Negotiations

    Adding instant messaging to enable smooth communication between farmers and buyers, making price discussions and product inquiries effortless.

#### Logistics & Delivery Integration

    Teaming up with local delivery services to provide a hassle-free shipping option for buyers, complete with automated delivery tracking.

#### Advanced Analytics for Farmers

    Equipping farmers with sales insights, demand trends, and pricing suggestions to empower them with data-driven decision-making tools.

#### Multi-Language Support Expansion

    Expanding Svelte’s i18n translation module to include more languages, ensuring the platform is accessible to a broader, global audience.

#### AI-Powered Crop & Price Prediction

    Leveraging machine learning to forecast market trends and suggest optimal pricing based on demand, season, and location.

#### Long-Term Vision

Mobile App Development (Android & iOS) to make the platform more accessible on the go.

Blockchain-based Smart Contracts to ensure secure and transparent transactions.

Integration with Government Schemes to help farmers access subsidies and other benefits.



# Contribution

## create-svelte

Everything you need to build a Svelte project, powered by [`create-svelte`](https://github.com/sveltejs/kit/tree/main/packages/create-svelte).

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```bash
# create a new project in the current directory
npm create svelte@latest

# create a new project in my-app
npm create svelte@latest my-app
```

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.
