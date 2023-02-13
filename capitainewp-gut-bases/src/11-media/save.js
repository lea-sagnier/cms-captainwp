import { __ } from '@wordpress/i18n'
import { useBlockProps, RichText } from '@wordpress/block-editor'

export default function save( props ) {
	const blockProps = useBlockProps.save()

	return (
		<div  { ...blockProps }>
			<div className='picturelegend'>
			<img 
				src={ props.attributes.pictureURL } 
				alt={ props.attributes.pictureAlt }/>

				<p className="legende">{ props.attributes.content }</p>
			</div>

		</div>
	)
}
