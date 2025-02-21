# Time to deploy!

Create a HTML website served with Express that revolves around time. 

**Creativity** is encouraged. **Sharing** on Teams is encouraged. I will make a thread. 

---

## Deployment

It must be deployed somehow. Deployment is not a learning goal for the course but it would still be neat if everyone could figure it out for this assignment. 

Vercel is one option but there are many alternatives. Beware that Vercel is serverless so you can't have CSS and Javascript in multiple files. Define all CSS And JS in the HTML files for this assignment.

This is an excellent guide for Vercel:

https://shadowsmith.com/how-to-deploy-an-express-api-to-vercel

---

## Hand-in

In GitHub Classroom (link in Teams):

1. The code

2. In README.md: Link that the project is deployed on


---

## Vercel Quirks

### CSS and JS

Based on your knowledge so far, you can't have multiple files for CSS and JS in Vercel even if it works locally. Please keep all CSS and JS in the HTML files. 

Next week I will show you how to serve multiple client files.

### Caching

If you experience caching problems in Vercel (solved by hard refresh) then add this the affected route (preferably) or globally to all routes:

```bash
res.set('Cache-Control', 'no-store'); // Prevent caching
```

