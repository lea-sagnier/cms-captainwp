import { __ } from '@wordpress/i18n'
import { useBlockProps, MediaUpload, MediaUploadCheck } from '@wordpress/block-editor'
import { Placeholder, Button } from '@wordpress/components'

import './editor.scss'

export default function Edit( props ) {
	const blockProps = useBlockProps()

	// Attribution des informations de l'image
	const onSelectImage = picture => {

		console.log(picture) // Afficher les informations récupérées de l'image

		props.setAttributes( {
			pictureID: picture.id,
			pictureURL: picture.url,
			pictureAlt: picture.alt,
		})
	}

	// Effacement des données de l'image
	const onRemoveImage = () => {
		props.setAttributes({
			pictureID: null,
			pictureURL: null,
			pictureAlt: null,
		})
	}
	const onChangeContent = event => {
		props.setAttributes( { content: event.target.value } )
	}

	return (
		<div { ...blockProps }>
			{ ! props.attributes.pictureID ? (
                <MediaUploadCheck>
                    <MediaUpload
                        onSelect={ onSelectImage }
                        allowedTypes={ [ 'image' ] }
                        value={ props.attributes.pictureID }
                        render={ ( { open } ) => (
                            <Placeholder
                                icon="images-alt"
                                label={ __( 'Photo', 'capitainewp-gut-bases' ) }
                                instructions={ __( 'Select a picture', 'capitainewp-gut-bases' ) }
                            >
                                <Button
                                    isSecondary
                                    isLarge
                                    onClick={ open }
                                    icon="upload"
                                >
                                    { __( 'Import', 'capitainewp-gut-bases' ) }
                                </Button>
                            </Placeholder>
                        ) }
                    />
                </MediaUploadCheck>
            ) : (
				<div className="capitaine-image-wrapper">
					<div>
					<img
						src={ props.attributes.pictureURL }
						alt={ props.attributes.pictureAlt }
					/>
					
					{ props.isSelected ? ( // N'afficher le champ seulement si le bloc est actif
					<input
						type='text'
						value={ props.attributes.content }
						onChange={ onChangeContent }
						placeholder={ __('Write a legend!', 'capitainewp-gut-bases' ) }
						/>
					) : (
						<p className="legende">{ props.attributes.content }</p>
					) }

					{ props.isSelected && (

						<Button
							className="capitaine-remove-image"
							onClick={ onRemoveImage }
							icon="dismiss"
						>
							{ __( 'Remove picture', 'capitainewp-gut-bases' ) }
						</Button>

					) }
					</div>
				</div>
		) }
		</div>
	)
}              