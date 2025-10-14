# Google Maps Setup Instructions

## Getting Your Google Maps API Key

1. Go to the [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Enable the following APIs:
   - Maps JavaScript API
   - Places API (optional, for advanced features)
4. Go to "Credentials" and create an API key
5. Restrict your API key for security:
   - Application restrictions: HTTP referrers
   - Add your domain(s): `localhost:3000/*`, `yourdomain.com/*`
   - API restrictions: Select only the APIs you enabled

## Setting Up the Environment Variable

1. Create a `.env.local` file in your project root (if it doesn't exist)
2. Add your API key:

```bash
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_actual_api_key_here
```

3. Restart your development server:

```bash
npm run dev
```

## Security Notes

- Never commit your API key to version control
- Always use environment variables for API keys
- Restrict your API key to specific domains and APIs
- Monitor your API usage in the Google Cloud Console

## Troubleshooting

If you see "Google Maps API Key Required" message:

1. Make sure your `.env.local` file is in the project root
2. Verify the environment variable name is exactly `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY`
3. Restart your development server after adding the environment variable
4. Check that your API key has the Maps JavaScript API enabled

## Cost Considerations

- Google Maps API has a free tier with usage limits
- Monitor your usage in the Google Cloud Console
- Set up billing alerts to avoid unexpected charges
- Consider caching map data for production applications
