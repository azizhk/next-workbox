# Next.js + Workbox + Typescript Example

Steps to see the demo:

1. Fork the Repo
2. Register for Netlify
3. Click on Create new Site from Git
4. Choose your fork.
5. In the Build Settings
   - Build Command: `yarn build`
   - Publish Directory: `out`
6. Wait for Deploy to finish and then open your website in a tab.
7. Now go to Netlify Deploys and trigger another deploy.
8. Open your website in another tab. Both tabs should now have "New Version Available Toast"
9. Click "Upgrade" on any one tab and then both tabs should reload.

This example covers:

- Service Worker with Typescript
- Service Worker Bundling (Provided by the workbox webpack plugin)
- Precaching of client side assets when service worker starts
- Communication to user that new update is available.
- Reload all existing tabs when Service Worker is updated to avoid state mismatch.
- Update service worker when user navigates (by clicking on link or some action)
- Update service worker when user refreshes the page

TODO:

- Use assetPrefix when assets are uploaded to CDN
- Precache HTML assets as well when in export mode.

Reading:

- https://redfin.engineering/how-to-fix-the-refresh-button-when-using-service-workers-a8e27af6df68
- https://classroom.udacity.com/courses/ud899
